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

const Text = styled.p(
  (props: TextPropsType) => `
  ${CommonStyle}

  display: ${props.inline ? 'inline' : undefined};

  color: ${`var(${props.color ?? '--adaptive950'})`};
  font-weight: ${props.weight ?? '400'};
  font-size: ${FONT_SIZE[props.size ?? 'md']};
  line-height: ${LINE_HEIGHT[props.lineHeight ?? 100]};
`
);

export default Text;
