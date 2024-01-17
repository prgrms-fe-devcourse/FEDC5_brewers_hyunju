import React from 'react';
import Select from './common/Select';
import styled from '@emotion/styled';

const WORK_SPOT_INDEX = [
  { label: '카페', value: 'cafe' },
  { label: '집', value: 'home' },
  { label: '기타', value: 'etc' },
];

interface WorkSpotSelectorType {
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const WorkSpotSelector = ({ handleChange }: WorkSpotSelectorType) => {
  return (
    <Wrapper>
      <Select
        label='오늘의 카공 장소'
        data={WORK_SPOT_INDEX}
        placeholder='유형 선택'
        handleChange={handleChange}
      />
    </Wrapper>
  );
};

export default WorkSpotSelector;

const Wrapper = styled.div`
  align-self: flex-start;
  margin-bottom: 1rem;
`;
