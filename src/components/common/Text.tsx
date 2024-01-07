import styled from 'styled-components';
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

  color: ${(props) => `var(${props.color ?? '--adaptive950'})`};
  font-weight: ${(props) => props.weight ?? '400'};
  font-size: ${(props) => FONT_SIZE[props.size ?? 'md']};
  line-height: ${({ lineHeight }) => LINE_HEIGHT[lineHeight ?? 100]};
`;

export default Text;
