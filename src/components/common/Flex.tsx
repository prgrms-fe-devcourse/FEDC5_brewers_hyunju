import styled from 'styled-components';
import { Property } from 'csstype';

export interface FlexPropsType {
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  alignContent?: Property.AlignContent;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  m?: number;
  mx?: number;
  my?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
}

const Flex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  margin: ${({ m }) => (m ? `${m}rem` : undefined)};
  margin-top: ${({ mt, my }) =>
    mt ? `${mt}rem` : my ? `${my}rem` : undefined};
  margin-right: ${({ mr, mx }) =>
    mr ? `${mr}rem` : mx ? `${mx}rem` : undefined};
  margin-bottom: ${({ mb, my }) =>
    mb ? `${mb}rem` : my ? `${my}rem` : undefined};
  margin-left: ${({ ml, mx }) =>
    ml ? `${ml}rem` : mx ? `${mx}rem` : undefined};
  padding: ${({ p }) => (p ? `${p}rem` : undefined)};
  padding-top: ${({ pt, py }) =>
    pt ? `${pt}rem` : py ? `${py}rem` : undefined};
  padding-right: ${({ pr, px }) =>
    pr ? `${pr}rem` : px ? `${px}rem` : undefined};
  padding-bottom: ${({ pb, py }) =>
    pb ? `${pb}rem` : py ? `${py}rem` : undefined};
  padding-left: ${({ pl, px }) =>
    pl ? `${pl}rem` : px ? `${px}rem` : undefined};

  column-gap: ${({ gap, columnGap }) =>
    columnGap ? `${columnGap}rem` : gap ? `${gap}rem` : undefined};
  row-gap: ${({ gap, rowGap }) =>
    rowGap ? `${rowGap}rem` : gap ? `${gap}rem` : undefined};
`;

export default Flex;
