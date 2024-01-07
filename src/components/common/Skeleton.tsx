import styled, { keyframes } from 'styled-components';

export interface SkeletonPropsType {
  width?: number;
  height?: number;
  circle?: boolean;
  animation?: boolean;
  inline?: boolean;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

const propKeys = [
  'width',
  'height',
  'circle',
  'animation',
  'inline',
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
  'p',
  'px',
  'py',
  'pt',
  'pb',
  'pl',
  'pr',
];

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

const Skeleton = styled('div').withConfig({
  shouldForwardProp: (prop) => !propKeys.includes(prop),
})<SkeletonPropsType>`
  display: ${(props) => (props.inline ? 'inline-block' : 'block')};

  width: ${({ width = 10, height = 1, circle }) =>
    circle ? `${Math.max(width, height)}rem` : `${width}rem`};
  height: ${({ width = 10, height = 1, circle }) =>
    circle ? `${Math.max(width, height)}rem` : `${height}rem`};
  margin: ${({ m }) => (m ? `${m}rem` : undefined)};
  margin-top: ${({ mt, my }) =>
    mt ? `${mt}rem` : my ? `${my}rem` : undefined};
  margin-right: ${({ mr, mx }) =>
    mr ? `${mr}rem` : mx ? `${mx}rem` : undefined};
  margin-bottom: ${({ mb, my }) =>
    mb ? `${mb}rem` : my ? `${my}rem` : undefined};
  margin-left: ${({ ml, mx }) =>
    ml ? `${ml}rem` : mx ? `${mx}rem` : undefined};
  padding: ${({ p }) => (p ? `${p}rem` : undefined)};
  padding-top: ${({ pt, py }) =>
    pt ? `${pt}rem` : py ? `${py}rem` : undefined};
  padding-right: ${({ pr, px }) =>
    pr ? `${pr}rem` : px ? `${px}rem` : undefined};
  padding-bottom: ${({ pb, py }) =>
    pb ? `${pb}rem` : py ? `${py}rem` : undefined};
  padding-left: ${({ pl, px }) =>
    pl ? `${pl}rem` : px ? `${px}rem` : undefined};
  border-radius: ${({ circle }) => (circle ? '50%' : '0.125rem')};

  background-color: var(--adaptive300);

  animation: ${wave} 2s infinite linear paused alternate;

  animation-play-state: ${(props) => (props.animation ? 'running' : 'pasued')};
`;

export default Skeleton;
