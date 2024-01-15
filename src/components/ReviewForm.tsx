import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import {
  IconArmchair,
  IconPlug,
  IconUsers,
  IconVolume,
} from '@tabler/icons-react';
import RadioGroup from './RadioGroup/RadioGroup';
import Flex from './common/Flex';
import Tabs from './common/Tabs';
import Text from './common/Text';
import { postModalState } from '~/recoil/postModal/atoms';
import { reviewFormState } from '~/recoil/postModal/selectors';
import Select from './common/Select';

const RADIO_GROUP_CONFIG = [
  { label: '별로에요', value: '1' },
  { label: '', value: '2' },
  { label: '잘 모르겠어요', value: '3' },
  { label: '', value: '4' },
  { label: '좋아요', value: '5' },
];
const FORM_ICONS = Object.freeze([
  <IconPlug />,
  <IconVolume />,
  <IconUsers />,
  <IconArmchair />,
]);
const DAY_OPTIONS = [
  { label: '일요일', value: '0' },
  { label: '월요일', value: '1' },
  { label: '화요일', value: '2' },
  { label: '수요일', value: '3' },
  { label: '목요일', value: '4' },
  { label: '금요일', value: '5' },
  { label: '토요일', value: '6' },
];
const FORM_CONFIG: readonly {
  key: 'plugs' | 'quiet' | 'crowded' | 'seat';
  description: string;
}[] = Object.freeze([
  { key: 'plugs', description: '자리에 콘센트는 충분하나요?' },
  { key: 'quiet', description: '공부하기에 조용한가요?' },
  { key: 'crowded', description: '사람이 많은가요?' },
  { key: 'seat', description: '자리가 편한가요?' },
]);

const ReviewForm = () => {
  const setPostModal = useSetRecoilState(postModalState);
  const reviewForm = useRecoilValue(reviewFormState);
  return (
    <StyledFlex direction='column'>
      <Tabs>
        <Tabs.Header>
          {FORM_ICONS.map((icon, idx) => (
            <Tabs.Item
              id={idx}
              key={idx}
              icon={icon}
            />
          ))}
        </Tabs.Header>

        {FORM_CONFIG.map(({ key, description }, idx) => (
          <Tabs.Body
            id={idx}
            key={key}
          >
            <Text
              size='xl'
              weight={600}
              color='--adaptive400'
              m={1}
            >
              {description}
            </Text>
            {key === 'crowded' && (
              <Select
                data={DAY_OPTIONS}
                label='방문 요일'
                placeholder='요일 선택'
                required
                handleChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setPostModal((prev) => ({
                    ...prev,
                    reviewForm: {
                      ...prev.reviewForm,
                      crowded: {
                        ...prev.reviewForm.crowded,
                        day: e.target.value,
                      },
                    },
                  }))
                }
              />
            )}
            <RadioGroup
              defaultValue={
                key === 'crowded'
                  ? reviewForm.crowded && reviewForm.crowded!.value
                  : reviewForm[key]
              }
              options={RADIO_GROUP_CONFIG}
              name={key}
              onChange={(value) => {
                if (key === 'crowded') {
                  setPostModal((prev) => ({
                    ...prev,
                    reviewForm: {
                      ...prev.reviewForm,
                      crowded: {
                        ...prev.reviewForm.crowded,
                        value,
                      },
                    },
                  }));
                } else {
                  setPostModal((prev) => ({
                    ...prev,
                    reviewForm: {
                      ...prev.reviewForm,
                      [key]: value,
                    },
                  }));
                }
              }}
            />
          </Tabs.Body>
        ))}
      </Tabs>
    </StyledFlex>
  );
};

export default ReviewForm;

const StyledFlex = styled(Flex)`
  overflow: hidden;
  margin-bottom: 1.5rem;
`;
