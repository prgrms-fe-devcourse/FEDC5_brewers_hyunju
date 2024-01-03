import styled, { keyframes } from 'styled-components';
import ColorType from '~/types/design/color';

interface CircleLoadingPropsType {
  size?: number;
  time?: number;
  strokeWidth?: number;
  primaryColor?: ColorType;
  secondaryColor?: ColorType;
}

const CircleLoading = ({
  size = 7.5,
  time = 2,
  strokeWidth = 12,
  primaryColor = '--primaryColor' as ColorType,
  secondaryColor = '--adaptive300' as ColorType,
}: CircleLoadingPropsType) => {
  const newSize = size < 2 ? 2 : size;
  const convertedSize = newSize * 16;
  const circleRadius = convertedSize / 4;
  const primaryColorBarRatio = (circleRadius * 2 * Math.PI) / 5;
  const secondaryColorBarRatio = ((circleRadius * 2 * Math.PI) / 5) * 4;
  const newStrokeWidth = strokeWidth < 0 ? 0 : strokeWidth;

  const rotateBar = keyframes`
    100% {
        transform: rotate(360deg);
}
  `;

  const Container = styled.div`
    width: ${newSize}rem;
    height: ${newSize}rem;

    animation: ${rotateBar} ${time}s linear infinite;
  `;

  return (
    <Container>
      <svg
        width={convertedSize}
        height={convertedSize}
        viewBox={`0 0 ${convertedSize} ${convertedSize}`}
      >
        <circle
          cx={circleRadius * 2}
          cy={circleRadius * 2}
          r={circleRadius}
          stroke-width={newStrokeWidth}
          fill='none'
          style={{ stroke: `var(${secondaryColor})` }}
        />
        <circle
          cx={circleRadius * 2}
          cy={circleRadius * 2}
          r={circleRadius}
          stroke-width={newStrokeWidth}
          fill='none'
          style={{ stroke: `var(${primaryColor})` }}
          stroke-dasharray={`${primaryColorBarRatio} ${secondaryColorBarRatio}`}
          stroke-linecap='round'
        />
      </svg>
    </Container>
  );
};

export default CircleLoading;
