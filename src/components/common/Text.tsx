import styled from '@emotion/styled';
import ColorType from '~/types/design/color';
import {
  FontSizeType,
  FontWeightType,
  LineHeightType,
} from '~/types/design/font';
import { FONT_SIZE, LINE_HEIGHT } from '~/constants/design';
import { CommonStyle, CommonStylePropsType } from './CommonStyle';

export interface TextPropsType extends CommonStylePropsType {
  size?: FontSizeType;
  lineHeight?: LineHeightType;
  weight?: FontWeightType;
  color?: ColorType;
  inline?: boolean;
}

const Text = styled.p<TextPropsType>`
  ${CommonStyle}

  display: ${({ inline }) => (inline ? 'inline' : undefined)};

  color: ${({ color }) => `var(${color ?? '--adaptive950'})`};
  font-weight: ${({ weight }) => weight ?? '400'};
  font-size: ${({ size }) => FONT_SIZE[size ?? 'md']};
  line-height: ${({ lineHeight }) => LINE_HEIGHT[lineHeight ?? 100]};
`;

export default Text;
