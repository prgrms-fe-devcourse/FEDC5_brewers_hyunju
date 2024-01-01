import styled from 'styled-components';
import { Property } from 'csstype';

interface FlexPropsType {
  direction?: Property.FlexDirection;
  wrap?: Property.FlexWrap;
  alignContent?: Property.AlignContent;
  alignItems?: Property.AlignItems;
  justifyContent?: Property.JustifyContent;
  gap?: Property.Gap;
  m?: Property.Margin;
  mx?: Property.MarginLeft;
  my?: Property.MarginTop;
  mt?: Property.MarginTop;
  mb?: Property.MarginBottom;
  ml?: Property.MarginLeft;
  mr?: Property.MarginRight;
  p?: Property.Padding;
  px?: Property.PaddingLeft;
  py?: Property.PaddingTop;
  pt?: Property.PaddingTop;
  pb?: Property.PaddingBottom;
  pl?: Property.PaddingLeft;
  pr?: Property.PaddingRight;
}

const Flex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.wrap};
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};

  margin: ${(props) => props.m};
  margin-top: ${(props) => props.mt ?? props.my};
  margin-right: ${(props) => props.mr ?? props.mx};
  margin-bottom: ${(props) => props.mb ?? props.my};
  margin-left: ${(props) => props.ml ?? props.mx};
  padding: ${(props) => props.p};
  padding-top: ${(props) => props.pt ?? props.py};
  padding-right: ${(props) => props.pr ?? props.px};
  padding-bottom: ${(props) => props.pb ?? props.py};
  padding-left: ${(props) => props.pl ?? props.px};

  gap: ${(props) => props.gap};
`;

export default Flex;
