import { css } from '@emotion/react';
import {
  handleVariable,
  handleValue,
  handleSize,
} from '~/utils/handleResponsiveStyle';
import { ResponsiveStyleType } from '~/types/design/common';
import { CONTAINER_SIZE } from '~/constants/design';
import ColorType from '~/types/design/color';

export interface CommonStylePropsType {
  width?: number | string | ResponsiveStyleType;
  height?: number | string | ResponsiveStyleType;
  minWidth?: number | string | ResponsiveStyleType;
  minHeight?: number | string | ResponsiveStyleType;
  maxWidth?: number | string | ResponsiveStyleType;
  maxHeight?: number | string | ResponsiveStyleType;
  m?: number | string | ResponsiveStyleType;
  mx?: number | string | ResponsiveStyleType;
  my?: number | string | ResponsiveStyleType;
  mt?: number | string | ResponsiveStyleType;
  mr?: number | string | ResponsiveStyleType;
  mb?: number | string | ResponsiveStyleType;
  ml?: number | string | ResponsiveStyleType;
  p?: number | string | ResponsiveStyleType;
  px?: number | string | ResponsiveStyleType;
  py?: number | string | ResponsiveStyleType;
  pt?: number | string | ResponsiveStyleType;
  pr?: number | string | ResponsiveStyleType;
  pb?: number | string | ResponsiveStyleType;
  pl?: number | string | ResponsiveStyleType;
  bgColor?: ColorType | ResponsiveStyleType;
  color?: ColorType | ResponsiveStyleType<ColorType>;
  opacity?: number | string | ResponsiveStyleType;
  grow?: number | ResponsiveStyleType<number>;
  shrink?: number | ResponsiveStyleType<number>;
  basis?: number | ResponsiveStyleType<number>;
}

export const CommonStyle = (props: CommonStylePropsType) => css`
  flex-basis: ${handleValue(props.basis, 'base')};
  flex-grow: ${handleValue(props.grow, 'base')};
  flex-shrink: ${handleValue(props.shrink, 'base')};

  width: ${handleSize(props.width, 'base')};
  height: ${handleSize(props.height, 'base')};
  min-width: ${handleSize(props.minWidth, 'base')};
  min-height: ${handleSize(props.minHeight, 'base')};
  max-width: ${handleSize(props.maxWidth, 'base')};
  max-height: ${handleSize(props.maxHeight, 'base')};
  margin: ${handleSize(props.m, 'base')};
  margin-top: ${handleSize(props.mt, 'base') ?? handleSize(props.my, 'base')};
  margin-right: ${handleSize(props.mr, 'base') ?? handleSize(props.mx, 'base')};
  margin-bottom: ${handleSize(props.mb, 'base') ??
  handleSize(props.my, 'base')};
  margin-left: ${handleSize(props.ml, 'base') ?? handleSize(props.mx, 'base')};
  padding: ${handleSize(props.p, 'base')};
  padding-top: ${handleSize(props.pt, 'base') ?? handleSize(props.py, 'base')};
  padding-right: ${handleSize(props.pr, 'base') ??
  handleSize(props.px, 'base')};
  padding-bottom: ${handleSize(props.pb, 'base') ??
  handleSize(props.py, 'base')};
  padding-left: ${handleSize(props.pl, 'base') ?? handleSize(props.px, 'base')};

  background-color: ${handleVariable(props.bgColor, 'base')};

  color: ${handleVariable(props.color, 'base')};

  box-sizing: border-box;

  opacity: ${handleValue(props.opacity, 'base')};

  @media screen and (width <= ${CONTAINER_SIZE['sm']}) {
    flex-basis: ${handleValue(props.basis, 'sm')};
    flex-grow: ${handleValue(props.grow, 'sm')};
    flex-shrink: ${handleValue(props.shrink, 'sm')};

    width: ${handleSize(props.width, 'sm')};
    height: ${handleSize(props.height, 'sm')};
    min-width: ${handleSize(props.minWidth, 'sm')};
    min-height: ${handleSize(props.minHeight, 'sm')};
    max-width: ${handleSize(props.maxWidth, 'sm')};
    max-height: ${handleSize(props.maxHeight, 'sm')};
    margin-top: ${handleSize(props.mt, 'sm') ?? handleSize(props.my, 'sm')};
    margin-right: ${handleSize(props.mr, 'sm') ?? handleSize(props.mx, 'sm')};
    margin-bottom: ${handleSize(props.mb, 'sm') ?? handleSize(props.my, 'sm')};
    margin-left: ${handleSize(props.ml, 'sm') ?? handleSize(props.mx, 'sm')};
    padding: ${handleSize(props.p, 'sm')};
    padding-top: ${handleSize(props.pt, 'sm') ?? handleSize(props.py, 'sm')};
    padding-right: ${handleSize(props.pr, 'sm') ?? handleSize(props.px, 'sm')};
    padding-bottom: ${handleSize(props.pb, 'sm') ?? handleSize(props.py, 'sm')};
    padding-left: ${handleSize(props.pl, 'sm') ?? handleSize(props.px, 'sm')};

    background-color: ${handleVariable(props.bgColor, 'sm')};

    color: ${handleVariable(props.color, 'sm')};

    opacity: ${handleValue(props.opacity, 'sm')};
  }

  @media screen and (width > ${CONTAINER_SIZE['sm']}) {
    flex-basis: ${handleValue(props.basis, 'md')};
    flex-grow: ${handleValue(props.grow, 'md')};
    flex-shrink: ${handleValue(props.shrink, 'md')};

    width: ${handleSize(props.width, 'md')};
    height: ${handleSize(props.height, 'md')};
    min-width: ${handleSize(props.minWidth, 'md')};
    min-height: ${handleSize(props.minHeight, 'md')};
    max-width: ${handleSize(props.maxWidth, 'md')};
    max-height: ${handleSize(props.maxHeight, 'md')};
    margin-top: ${handleSize(props.mt, 'md') ?? handleSize(props.my, 'md')};
    margin-right: ${handleSize(props.mr, 'md') ?? handleSize(props.mx, 'md')};
    margin-bottom: ${handleSize(props.mb, 'md') ?? handleSize(props.my, 'md')};
    margin-left: ${handleSize(props.ml, 'md') ?? handleSize(props.mx, 'md')};
    padding: ${handleSize(props.p, 'md')};
    padding-top: ${handleSize(props.pt, 'md') ?? handleSize(props.py, 'md')};
    padding-right: ${handleSize(props.pr, 'md') ?? handleSize(props.px, 'md')};
    padding-bottom: ${handleSize(props.pb, 'md') ?? handleSize(props.py, 'md')};
    padding-left: ${handleSize(props.pl, 'md') ?? handleSize(props.px, 'md')};

    background-color: ${handleVariable(props.bgColor, 'md')};

    color: ${handleVariable(props.color, 'md')};

    opacity: ${handleValue(props.opacity, 'md')};
  }

  @media screen and (width > ${CONTAINER_SIZE['md']}) {
    flex-basis: ${handleValue(props.basis, 'lg')};
    flex-grow: ${handleValue(props.grow, 'lg')};
    flex-shrink: ${handleValue(props.shrink, 'lg')};

    width: ${handleSize(props.width, 'lg')};
    height: ${handleSize(props.height, 'lg')};
    min-width: ${handleSize(props.minWidth, 'lg')};
    min-height: ${handleSize(props.minHeight, 'lg')};
    max-width: ${handleSize(props.maxWidth, 'lg')};
    max-height: ${handleSize(props.maxHeight, 'lg')};
    margin-top: ${handleSize(props.mt, 'lg') ?? handleSize(props.my, 'lg')};
    margin-right: ${handleSize(props.mr, 'lg') ?? handleSize(props.mx, 'lg')};
    margin-bottom: ${handleSize(props.mb, 'lg') ?? handleSize(props.my, 'lg')};
    margin-left: ${handleSize(props.ml, 'lg') ?? handleSize(props.mx, 'lg')};
    padding: ${handleSize(props.p, 'lg')};
    padding-top: ${handleSize(props.pt, 'lg') ?? handleSize(props.py, 'lg')};
    padding-right: ${handleSize(props.pr, 'lg') ?? handleSize(props.px, 'lg')};
    padding-bottom: ${handleSize(props.pb, 'lg') ?? handleSize(props.py, 'lg')};
    padding-left: ${handleSize(props.pl, 'lg') ?? handleSize(props.px, 'lg')};

    background-color: ${handleVariable(props.bgColor, 'lg')};

    color: ${handleVariable(props.color, 'lg')};

    opacity: ${handleValue(props.opacity, 'lg')};
  }

  @media screen and (width > ${CONTAINER_SIZE['lg']}) {
    flex-basis: ${handleValue(props.basis, 'xl')};
    flex-grow: ${handleValue(props.grow, 'xl')};
    flex-shrink: ${handleValue(props.shrink, 'xl')};

    width: ${handleSize(props.width, 'xl')};
    height: ${handleSize(props.height, 'xl')};
    min-width: ${handleSize(props.minWidth, 'xl')};
    min-height: ${handleSize(props.minHeight, 'xl')};
    max-width: ${handleSize(props.maxWidth, 'xl')};
    max-height: ${handleSize(props.maxHeight, 'xl')};
    margin-top: ${handleSize(props.mt, 'xl') ?? handleSize(props.my, 'xl')};
    margin-right: ${handleSize(props.mr, 'xl') ?? handleSize(props.mx, 'xl')};
    margin-bottom: ${handleSize(props.mb, 'xl') ?? handleSize(props.my, 'xl')};
    margin-left: ${handleSize(props.ml, 'xl') ?? handleSize(props.mx, 'xl')};
    padding: ${handleSize(props.p, 'xl')};
    padding-top: ${handleSize(props.pt, 'xl') ?? handleSize(props.py, 'xl')};
    padding-right: ${handleSize(props.pr, 'xl') ?? handleSize(props.px, 'xl')};
    padding-bottom: ${handleSize(props.pb, 'xl') ?? handleSize(props.py, 'xl')};
    padding-left: ${handleSize(props.pl, 'xl') ?? handleSize(props.px, 'xl')};

    background-color: ${handleVariable(props.bgColor, 'xl')};

    color: ${handleVariable(props.color, 'xl')};

    opacity: ${handleValue(props.opacity, 'xl')};
  }
`;
