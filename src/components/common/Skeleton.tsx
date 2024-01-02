import styled, { keyframes } from 'styled-components';
import { Property } from 'csstype';

export interface SkeletonPropsType {
  width?: Property.Width;
  height?: Property.Height;
  circle?: boolean;
  animation?: boolean;
  inline?: boolean;
  p?: Property.Padding;
  px?: Property.PaddingLeft;
  py?: Property.PaddingTop;
  pt?: Property.PaddingTop;
  pb?: Property.PaddingBottom;
  pl?: Property.PaddingLeft;
  pr?: Property.PaddingRight;
  m?: Property.Margin;
  mx?: Property.MarginLeft;
  my?: Property.MarginTop;
  mt?: Property.MarginTop;
  mb?: Property.MarginBottom;
  ml?: Property.MarginLeft;
  mr?: Property.MarginRight;
}

const wave = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
`;

const Skeleton = styled.div<SkeletonPropsType>`
  display: ${(props) => (props.inline ? 'inline-block' : 'block')};

  width: ${(props) =>
    props.circle
      ? `calc((${props.width ?? '10rem'} + ${props.height ?? '1rem'}) / 2)`
      : props.width ?? '10rem'};
  height: ${(props) =>
    props.circle
      ? `calc((${props.width ?? '10rem'} + ${props.height ?? '1rem'}) / 2)`
      : props.height ?? '1rem'};
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt ?? props.my};
  margin-right: ${(props) => props.mr ?? props.mx};
  margin-bottom: ${(props) => props.mb ?? props.my};
  margin-left: ${(props) => props.ml ?? props.mx};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt ?? props.py};
  padding-right: ${(props) => props.pr ?? props.px};
  padding-bottom: ${(props) => props.pb ?? props.py};
  padding-left: ${(props) => props.pl ?? props.px};
  border-radius: ${(props) =>
    props.circle
      ? `calc((${props.width ?? '10rem'} + ${props.height ?? '1rem'}) / 4)`
      : '0.125rem'};

  background-color: var(--adaptive300);

  animation: ${wave} 2s infinite linear paused alternate;

  animation-play-state: ${(props) => (props.animation ? 'running' : 'pasued')};
`;

export default Skeleton;
