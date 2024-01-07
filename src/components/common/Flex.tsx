import styled from 'styled-components';
import { Property } from 'csstype';
import { CommonStyle, CommonStylePropsType } from './CommonStyle';

export interface FlexPropsType extends CommonStylePropsType {
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  alignContent?: Property.AlignContent;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
}

const Flex = styled.div<FlexPropsType>`
  ${CommonStyle}

  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  column-gap: ${({ gap, columnGap }) =>
    columnGap ? `${columnGap}rem` : gap ? `${gap}rem` : undefined};
  row-gap: ${({ gap, rowGap }) =>
    rowGap ? `${rowGap}rem` : gap ? `${gap}rem` : undefined};
`;

export default Flex;
