import { ReactNode, useMemo } from 'react';
import styled from '@emotion/styled';
import useTooltip from '../../hooks/useTooltip';
import getPositionStyle from '~/utils/getPositionStyle';
import { FONT_SIZE } from '~/constants/design';

export type PositionType = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  children: React.ReactNode;
  eventType: 'hover' | 'click' | 'focus';
  content: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  position?: PositionType;
  arrow?: boolean;
  width?: number;
  height?: number;
  fontWeight?: number;
}

const Tooltip = ({
  children,
  eventType,
  content,
  backgroundColor = 'var(--adaptive400)',
  textColor = 'white',
  position = 'bottom',
  arrow = true,
  width = 40,
  height = 30,
  fontWeight = 400,
}: TooltipProps) => {
  const [ref, isToolTipOn] = useTooltip({ eventType });

  const toolTipStyle = useMemo(
    () => ({
      backgroundColor,
      color: textColor,
      ...getPositionStyle(position, width, height),
      width,
      height,
      fontWeight,
    }),
    [backgroundColor, textColor, position, width, height, fontWeight]
  );

  return (
    <Container>
      <div ref={ref}>{children}</div>
      {isToolTipOn && (
        <Tip
          className={arrow ? `tip-${position}` : undefined}
          style={toolTipStyle}
        >
          {content}
        </Tip>
      )}
    </Container>
  );
};

export default Tooltip;

const Container = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;
const Tip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  border-radius: 5px;

  font-size: ${FONT_SIZE['sm']};

  &.tip-top {
    &::before {
      position: absolute;
      bottom: -6px;
      left: 50%;

      width: 0;
      height: 0;
      border-top: 7px solid ${(props) => props.style?.backgroundColor};
      border-right: 7px solid transparent;
      border-left: 7px solid transparent;

      content: '';
      transform: translate(-50%, 0);
    }
  }

  &.tip-bottom {
    &::before {
      position: absolute;
      top: -6px;
      left: 50%;

      width: 0;
      height: 0;
      border-right: 7px solid transparent;
      border-bottom: 7px solid ${(props) => props.style?.backgroundColor};
      border-left: 7px solid transparent;

      content: '';
      transform: translate(-50%, 0);
    }
  }

  &.tip-left {
    &::before {
      position: absolute;
      top: 50%;
      right: -6px;

      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-left: 7px solid ${(props) => props.style?.backgroundColor};

      content: '';
      transform: translate(0, -50%);
    }
  }

  &.tip-right {
    &::before {
      position: absolute;
      top: 50%;
      left: -6px;

      width: 0;
      height: 0;
      border-top: 7px solid transparent;
      border-right: 7px solid ${(props) => props.style?.backgroundColor};
      border-bottom: 7px solid transparent;

      content: '';
      transform: translate(0, -50%);
    }
  }
`;
