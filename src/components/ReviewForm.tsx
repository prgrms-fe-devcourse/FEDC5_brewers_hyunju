import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  IconArmchair,
  IconPlug,
  IconUsers,
  IconVolume,
} from '@tabler/icons-react';
import styled from 'styled-components';
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
  { label: '쾌적했어요', value: '5' },
];

const FORM_ICONS = [
  <IconPlug />,
  <IconVolume />,
  <IconUsers />,
  <IconArmchair />,
];
const FORM_BODY = [
  '자리에 콘센트는 충분하나요?',
  '공부하기에 조용한가요?',
  '사람이 많은가요?',
  '자리가 편한가요?',
];
const ReviewForm = () => {
  const setPostModal = useSetRecoilState(postModalState);
  const reviewForm = useRecoilValue(reviewFormState);
  return (
    <StyledFlex direction='column'>
      <Tabs>
        <Tabs.Header>
          {FORM_ICONS.map((icon, id) => (
            <Tabs.Item
              id={id}
              icon={icon}
            />
          ))}
        </Tabs.Header>
        {FORM_BODY.map((body, id) => (
          <Tabs.Body id={id}>
            <Text
              size='lg'
              weight={600}
              color='--adaptive400'
            >
              {body}
            </Text>
            <RadioGroup
              defaultValue={reviewForm[id]}
              options={RADIO_GROUP_CONFIG}
              onChange={(value) =>
                setPostModal((prev) => ({
                  ...prev,
                  reviewForm: prev.reviewForm.map((original, idx) => {
                    if (id === idx) return value;
                    return original;
                  }),
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
