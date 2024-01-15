import React from 'react';
import styled from '@emotion/styled';
import { IconCoffee, IconHome, IconQuestionMark } from '@tabler/icons-react';
import Tooltip from './common/Tooltip';
import Text from './common/Text';
import { WorkingSpotType } from '~/types/common';

interface WorkingSpotIconPropsType {
  workingSpot: WorkingSpotType;
}

const WORKING_SPOT_HOVER = {
  cafe: '카페',
  home: '집',
  etc: '기타 장소',
};
const ICON_SIZE = 30;
const WorkingSpotIcon = ({ workingSpot }: WorkingSpotIconPropsType) => {
  return (
    <Tooltip
      eventType='hover'
      content={
        <Text
          size='sm'
          style={{ display: 'inline' }}
        >
          오늘의 워킹스팟은{' '}
          <Text
            size='sm'
            color='--secondaryColor'
            weight={800}
            style={{ display: 'inline' }}
          >
            {WORKING_SPOT_HOVER[workingSpot]}
          </Text>
          입니다
        </Text>
      }
      position='top'
      width={200}
      height={40}
    >
      <Wrapper>
        {workingSpot === 'cafe' && <IconCoffee size={ICON_SIZE} />}
        {workingSpot === 'home' && <IconHome size={ICON_SIZE} />}
        {workingSpot === 'etc' && <IconQuestionMark size={ICON_SIZE} />}
      </Wrapper>
    </Tooltip>
  );
};

export default WorkingSpotIcon;

const Wrapper = styled.div`
  padding: 1rem;
`;
