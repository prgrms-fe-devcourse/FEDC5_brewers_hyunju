import styled from 'styled-components';
import ColorType from '~/types/design/color';
import {
  FontSizeType,
  FontWeightType,
  LineHeightType,
} from '~/types/design/font';
import { Property } from 'csstype';
import { FONT_SIZE, LINE_HEIGHT } from '~/constants/design';

interface TextPropsType {
  size?: FontSizeType;
  height?: LineHeightType;
  weight?: FontWeightType;
  color?: ColorType;
  m?: Property.Margin;
  mx?: Property.MarginLeft;
  my?: Property.MarginTop;
  mt?: Property.MarginTop;
  mb?: Property.MarginBottom;
  ml?: Property.MarginLeft;
  mr?: Property.MarginRight;
}

const Text = styled.p<TextPropsType>`
  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt ?? props.my};
  margin-right: ${(props) => props.mr ?? props.mx};
  margin-bottom: ${(props) => props.mb ?? props.my};
  margin-left: ${(props) => props.ml ?? props.mx};

  color: ${(props) => `var(${props.color ?? '--adaptive950'})`};
  font-weight: ${(props) => props.weight ?? '400'};
  font-size: ${(props) => FONT_SIZE[props.size ?? 'md']};
  line-height: ${(props) => LINE_HEIGHT[props.height ?? 100]};
`;

export default Text;
