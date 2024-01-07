import styled from '@emotion/styled';
import ContainerSizeType from '~/types/design/container';
import { CONTAINER_SIZE } from '~/constants/design';

export interface ContainerPropsType {
  maxWidth: ContainerSizeType;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

const Container = styled.div<ContainerPropsType>`
  width: 100%;
  max-width: ${(props) => CONTAINER_SIZE[props.maxWidth]};
  margin: 0 auto;
  padding: ${({ p }) => (p ? `${p}rem` : '1rem')};
  padding-top: ${({ pt, py }) =>
    pt ? `${pt}rem` : py ? `${py}rem` : undefined};
  padding-right: ${({ pr, px }) =>
    pr ? `${pr}rem` : px ? `${px}rem` : undefined};
  padding-bottom: ${({ pb, py }) =>
    pb ? `${pb}rem` : py ? `${py}rem` : undefined};
  padding-left: ${({ pl, px }) =>
    pl ? `${pl}rem` : px ? `${px}rem` : undefined};

  background-color: var(--adaptive50);

  color: var(--adaptive950);
`;

export default Container;
