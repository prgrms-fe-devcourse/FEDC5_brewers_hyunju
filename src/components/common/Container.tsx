import styled from '@emotion/styled';
import ContainerSizeType from '~/types/design/container';
import { CONTAINER_SIZE } from '~/constants/design';
import { CommonStyle, CommonStylePropsType } from './CommonStyle';

export interface ContainerPropsType extends CommonStylePropsType {
  maxWidth: ContainerSizeType;
}

const Container = styled.div<ContainerPropsType>`
  ${CommonStyle}

  width: 100%;
  max-width: ${({ maxWidth }) => CONTAINER_SIZE[maxWidth]};
  margin: 0 auto;

  background-color: var(--adaptive50);

  color: var(--adaptive950);
`;

export default Container;
