import styled from 'styled-components';
import ContainerSizeType from '~/types/design/container';
import { Property } from 'csstype';
import { CONTAINER_SIZE } from '~/constants/design';

interface ContainerPropsType {
  maxWidth: ContainerSizeType;
  p?: Property.Padding;
  px?: Property.PaddingLeft;
  py?: Property.PaddingTop;
  pt?: Property.PaddingTop;
  pb?: Property.PaddingBottom;
  pl?: Property.PaddingLeft;
  pr?: Property.PaddingRight;
}

const Container = styled.div<ContainerPropsType>`
  width: 100%;
  max-width: ${(props) => CONTAINER_SIZE[props.maxWidth]};
  margin: 0 auto;
  padding: ${(props) => props.p ?? '1rem'};
  padding-top: ${(props) => props.pt ?? props.py};
  padding-right: ${(props) => props.pr ?? props.px};
  padding-bottom: ${(props) => props.pb ?? props.py};
  padding-left: ${(props) => props.pl ?? props.px};

  background-color: var(--adaptive50);

  color: var(--adaptive950);
`;

export default Container;
