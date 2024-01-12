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
import { postModalState, reviewFormState } from '~/atoms/postModalState';

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
              size='lg'
              weight={600}
              color='--adaptive400'
            >
              {description}
            </Text>
            <RadioGroup
              defaultValue={reviewForm[key]}
              options={RADIO_GROUP_CONFIG}
              name={key}
              onChange={(value) =>
                setPostModal((prev) => ({
                  ...prev,
                  reviewForm: {
                    ...prev.reviewForm,
                    [key]: value,
                  },
                }))
              }
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
