import styled from '@emotion/styled';
import ColorType from '~/types/design/color';
import {
  FontSizeType,
  FontWeightType,
  LineHeightType,
} from '~/types/design/font';
import { FONT_SIZE, LINE_HEIGHT } from '~/constants/design';

export interface TextPropsType {
  size?: FontSizeType;
  height?: LineHeightType;
  weight?: FontWeightType;
  color?: ColorType;
  inline?: boolean;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
}

const Text = styled.p<TextPropsType>`
  display: ${({ inline }) => (inline ? 'inline' : undefined)};

  margin: ${({ m }) => (m ? `${m}rem` : undefined)};
  margin-top: ${({ mt, my }) =>
    mt ? `${mt}rem` : my ? `${my}rem` : undefined};
  margin-right: ${({ mr, mx }) =>
    mr ? `${mr}rem` : mx ? `${mx}rem` : undefined};
  margin-bottom: ${({ mb, my }) =>
    mb ? `${mb}rem` : my ? `${my}rem` : undefined};
  margin-left: ${({ ml, mx }) =>
    ml ? `${ml}rem` : mx ? `${mx}rem` : undefined};

  color: ${(props) => `var(${props.color ?? '--adaptive950'})`};
  font-weight: ${(props) => props.weight ?? '400'};
  font-size: ${(props) => FONT_SIZE[props.size ?? 'md']};
  line-height: ${(props) => LINE_HEIGHT[props.height ?? 100]};
`;

export default Text;
