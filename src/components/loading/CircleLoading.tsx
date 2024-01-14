import Container from '../common/Container';
import ColorType from '~/types/design/color';
import styled from '@emotion/styled';
import { keyframes, css } from '@emotion/react';

interface CircleLoadingPropsType {
  size?: number;
  time?: number;
  stroke?: number;
  color?: ColorType;
  backgroundColor?: ColorType;
}

interface AnimationPropsType {
  time: number;
  width: number;
  height: number;
}

const rotateBar = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Animation = styled.div(
  (props: AnimationPropsType) => css`
    width: ${props.width}px;
    height: ${props.height}px;

    animation: ${rotateBar} ${props.time}s linear infinite;
  `
);

const CircleLoading = ({
  size = 1,
  time = 2,
  stroke = 0.25,
  color = '--primaryColor' as ColorType,
  backgroundColor = '--adaptive300' as ColorType,
}: CircleLoadingPropsType) => {
  const newSize = size < 0 ? 0.01 : size;
  const convertedSize = newSize * 16;
  const colorBarRatio = (convertedSize * 2 * Math.PI) / 5;
  const backgroundColorBarRatio = ((convertedSize * 2 * Math.PI) / 5) * 4;
  const newStrokeWidth = stroke < 0 ? 0 : stroke * 16;

  return (
    <Container
      maxWidth={'sm'}
      style={{
        width: `${(convertedSize + newStrokeWidth) * 2}px`,
        height: `${(convertedSize + newStrokeWidth) * 2}px`,
        backgroundColor: 'transparent',
      }}
    >
      <Animation
        time={time}
        width={(convertedSize + newStrokeWidth) * 2}
        height={(convertedSize + newStrokeWidth) * 2}
      >
        <svg
          width={(convertedSize + newStrokeWidth) * 2}
          height={(convertedSize + newStrokeWidth) * 2}
        >
          <circle
            cx={convertedSize + newStrokeWidth}
            cy={convertedSize + newStrokeWidth}
            r={convertedSize}
            strokeWidth={newStrokeWidth * 2}
            fill='none'
            style={{ stroke: `var(${backgroundColor})` }}
          />
          <circle
            cx={convertedSize + newStrokeWidth}
            cy={convertedSize + newStrokeWidth}
            r={convertedSize}
            strokeWidth={newStrokeWidth * 2}
            fill='none'
            style={{ stroke: `var(${color})` }}
            strokeDasharray={`${colorBarRatio} ${backgroundColorBarRatio}`}
            strokeLinecap='round'
          />
        </svg>
      </Animation>
    </Container>
  );
};

export default CircleLoading;
