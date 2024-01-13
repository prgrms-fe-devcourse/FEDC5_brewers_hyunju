import styled from '@emotion/styled';
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
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};

  column-gap: ${({ gap, columnGap }) =>
    columnGap ? `${columnGap}rem` : gap ? `${gap}rem` : undefined};
  row-gap: ${({ gap, rowGap }) =>
    rowGap ? `${rowGap}rem` : gap ? `${gap}rem` : undefined};
`;

export default Flex;
