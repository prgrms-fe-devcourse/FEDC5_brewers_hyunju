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

const Flex = styled.div(
  (props: FlexPropsType) => `
  ${CommonStyle}

  display: flex;
  flex-direction: ${props.direction};
  flex-wrap: ${props.wrap};
  align-content: ${props.alignContent};
  align-items: ${props.alignItems};
  justify-content: ${props.justifyContent};

  column-gap: ${
    props.columnGap
      ? `${props.columnGap}rem`
      : props.gap
        ? `${props.gap}rem`
        : undefined
  };
  row-gap: ${
    props.rowGap
      ? `${props.rowGap}rem`
      : props.gap
        ? `${props.gap}rem`
        : undefined
  };
`
);

export default Flex;
