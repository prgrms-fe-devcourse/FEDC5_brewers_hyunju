import { css } from 'styled-components';
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

export const CommonStyle = css<CommonStylePropsType>`
  flex-basis: ${({ basis }) => handleValue(basis, 'base')};
  flex-grow: ${({ grow }) => handleValue(grow, 'base')};
  flex-shrink: ${({ shrink }) => handleValue(shrink, 'base')};

  width: ${({ width }) => handleSize(width, 'base')};
  height: ${({ height }) => handleSize(height, 'base')};
  min-width: ${({ minWidth }) => handleSize(minWidth, 'base')};
  min-height: ${({ minHeight }) => handleSize(minHeight, 'base')};
  max-width: ${({ maxWidth }) => handleSize(maxWidth, 'base')};
  max-height: ${({ maxHeight }) => handleSize(maxHeight, 'base')};
  margin: ${({ m }) => handleSize(m, 'base')};
  margin-top: ${({ my, mt }) =>
    handleSize(mt, 'base') ?? handleSize(my, 'base')};
  margin-right: ${({ mx, mr }) =>
    handleSize(mr, 'base') ?? handleSize(mx, 'base')};
  margin-bottom: ${({ my, mb }) =>
    handleSize(mb, 'base') ?? handleSize(my, 'base')};
  margin-left: ${({ mx, ml }) =>
    handleSize(ml, 'base') ?? handleSize(mx, 'base')};
  padding: ${({ p }) => handleSize(p, 'base')};
  padding-top: ${({ py, pt }) =>
    handleSize(pt, 'base') ?? handleSize(py, 'base')};
  padding-right: ${({ px, pr }) =>
    handleSize(pr, 'base') ?? handleSize(px, 'base')};
  padding-bottom: ${({ py, pb }) =>
    handleSize(pb, 'base') ?? handleSize(py, 'base')};
  padding-left: ${({ px, pl }) =>
    handleSize(pl, 'base') ?? handleSize(px, 'base')};

  background-color: ${({ bgColor }) => handleVariable(bgColor, 'base')};

  color: ${({ color }) => handleVariable(color, 'base')};

  opacity: ${({ opacity }) => handleValue(opacity, 'base')};

  @media screen and (width <= ${CONTAINER_SIZE['sm']}) {
    flex-basis: ${({ basis }) => handleValue(basis, 'sm')};
    flex-grow: ${({ grow }) => handleValue(grow, 'sm')};
    flex-shrink: ${({ shrink }) => handleValue(shrink, 'sm')};

    width: ${({ width }) => handleSize(width, 'sm')};
    height: ${({ height }) => handleSize(height, 'sm')};
    min-width: ${({ minWidth }) => handleSize(minWidth, 'sm')};
    min-height: ${({ minHeight }) => handleSize(minHeight, 'sm')};
    max-width: ${({ maxWidth }) => handleSize(maxWidth, 'sm')};
    max-height: ${({ maxHeight }) => handleSize(maxHeight, 'sm')};
    margin-top: ${({ my, mt }) => handleSize(mt, 'sm') ?? handleSize(my, 'sm')};
    margin-right: ${({ mx, mr }) =>
      handleSize(mr, 'sm') ?? handleSize(mx, 'sm')};
    margin-bottom: ${({ my, mb }) =>
      handleSize(mb, 'sm') ?? handleSize(my, 'sm')};
    margin-left: ${({ mx, ml }) =>
      handleSize(ml, 'sm') ?? handleSize(mx, 'sm')};
    padding: ${({ p }) => handleSize(p, 'sm')};
    padding-top: ${({ py, pt }) =>
      handleSize(pt, 'sm') ?? handleSize(py, 'sm')};
    padding-right: ${({ px, pr }) =>
      handleSize(pr, 'sm') ?? handleSize(px, 'sm')};
    padding-bottom: ${({ py, pb }) =>
      handleSize(pb, 'sm') ?? handleSize(py, 'sm')};
    padding-left: ${({ px, pl }) =>
      handleSize(pl, 'sm') ?? handleSize(px, 'sm')};

    background-color: ${({ bgColor }) => handleVariable(bgColor, 'sm')};

    color: ${({ color }) => handleVariable(color, 'sm')};

    opacity: ${({ opacity }) => handleValue(opacity, 'sm')};
  }

  @media screen and (width > ${CONTAINER_SIZE['sm']}) {
    flex-basis: ${({ basis }) => handleValue(basis, 'md')};
    flex-grow: ${({ grow }) => handleValue(grow, 'md')};
    flex-shrink: ${({ shrink }) => handleValue(shrink, 'md')};

    width: ${({ width }) => handleSize(width, 'md')};
    height: ${({ height }) => handleSize(height, 'md')};
    min-width: ${({ minWidth }) => handleSize(minWidth, 'md')};
    min-height: ${({ minHeight }) => handleSize(minHeight, 'md')};
    max-width: ${({ maxWidth }) => handleSize(maxWidth, 'md')};
    max-height: ${({ maxHeight }) => handleSize(maxHeight, 'md')};
    margin-top: ${({ my, mt }) => handleSize(mt, 'md') ?? handleSize(my, 'md')};
    margin-right: ${({ mx, mr }) =>
      handleSize(mr, 'md') ?? handleSize(mx, 'md')};
    margin-bottom: ${({ my, mb }) =>
      handleSize(mb, 'md') ?? handleSize(my, 'md')};
    margin-left: ${({ mx, ml }) =>
      handleSize(ml, 'md') ?? handleSize(mx, 'md')};
    padding: ${({ p }) => handleSize(p, 'md')};
    padding-top: ${({ py, pt }) =>
      handleSize(pt, 'md') ?? handleSize(py, 'md')};
    padding-right: ${({ px, pr }) =>
      handleSize(pr, 'md') ?? handleSize(px, 'md')};
    padding-bottom: ${({ py, pb }) =>
      handleSize(pb, 'md') ?? handleSize(py, 'md')};
    padding-left: ${({ px, pl }) =>
      handleSize(pl, 'md') ?? handleSize(px, 'md')};

    background-color: ${({ bgColor }) => handleVariable(bgColor, 'md')};

    color: ${({ color }) => handleVariable(color, 'md')};

    opacity: ${({ opacity }) => handleValue(opacity, 'md')};
  }

  @media screen and (width > ${CONTAINER_SIZE['md']}) {
    flex-basis: ${({ basis }) => handleValue(basis, 'lg')};
    flex-grow: ${({ grow }) => handleValue(grow, 'lg')};
    flex-shrink: ${({ shrink }) => handleValue(shrink, 'lg')};

    width: ${({ width }) => handleSize(width, 'lg')};
    height: ${({ height }) => handleSize(height, 'lg')};
    min-width: ${({ minWidth }) => handleSize(minWidth, 'lg')};
    min-height: ${({ minHeight }) => handleSize(minHeight, 'lg')};
    max-width: ${({ maxWidth }) => handleSize(maxWidth, 'lg')};
    max-height: ${({ maxHeight }) => handleSize(maxHeight, 'lg')};
    margin-top: ${({ my, mt }) => handleSize(mt, 'lg') ?? handleSize(my, 'lg')};
    margin-right: ${({ mx, mr }) =>
      handleSize(mr, 'lg') ?? handleSize(mx, 'lg')};
    margin-bottom: ${({ my, mb }) =>
      handleSize(mb, 'lg') ?? handleSize(my, 'lg')};
    margin-left: ${({ mx, ml }) =>
      handleSize(ml, 'lg') ?? handleSize(mx, 'lg')};
    padding: ${({ p }) => handleSize(p, 'lg')};
    padding-top: ${({ py, pt }) =>
      handleSize(pt, 'lg') ?? handleSize(py, 'lg')};
    padding-right: ${({ px, pr }) =>
      handleSize(pr, 'lg') ?? handleSize(px, 'lg')};
    padding-bottom: ${({ py, pb }) =>
      handleSize(pb, 'lg') ?? handleSize(py, 'lg')};
    padding-left: ${({ px, pl }) =>
      handleSize(pl, 'lg') ?? handleSize(px, 'lg')};

    background-color: ${({ bgColor }) => handleVariable(bgColor, 'lg')};

    color: ${({ color }) => handleVariable(color, 'lg')};

    opacity: ${({ opacity }) => handleValue(opacity, 'lg')};
  }

  @media screen and (width > ${CONTAINER_SIZE['lg']}) {
    flex-basis: ${({ basis }) => handleValue(basis, 'xl')};
    flex-grow: ${({ grow }) => handleValue(grow, 'xl')};
    flex-shrink: ${({ shrink }) => handleValue(shrink, 'xl')};

    width: ${({ width }) => handleSize(width, 'xl')};
    height: ${({ height }) => handleSize(height, 'xl')};
    min-width: ${({ minWidth }) => handleSize(minWidth, 'xl')};
    min-height: ${({ minHeight }) => handleSize(minHeight, 'xl')};
    max-width: ${({ maxWidth }) => handleSize(maxWidth, 'xl')};
    max-height: ${({ maxHeight }) => handleSize(maxHeight, 'xl')};
    margin-top: ${({ my, mt }) => handleSize(mt, 'xl') ?? handleSize(my, 'xl')};
    margin-right: ${({ mx, mr }) =>
      handleSize(mr, 'xl') ?? handleSize(mx, 'xl')};
    margin-bottom: ${({ my, mb }) =>
      handleSize(mb, 'xl') ?? handleSize(my, 'xl')};
    margin-left: ${({ mx, ml }) =>
      handleSize(ml, 'xl') ?? handleSize(mx, 'xl')};
    padding: ${({ p }) => handleSize(p, 'xl')};
    padding-top: ${({ py, pt }) =>
      handleSize(pt, 'xl') ?? handleSize(py, 'xl')};
    padding-right: ${({ px, pr }) =>
      handleSize(pr, 'xl') ?? handleSize(px, 'xl')};
    padding-bottom: ${({ py, pb }) =>
      handleSize(pb, 'xl') ?? handleSize(py, 'xl')};
    padding-left: ${({ px, pl }) =>
      handleSize(pl, 'xl') ?? handleSize(px, 'xl')};

    background-color: ${({ bgColor }) => handleVariable(bgColor, 'xl')};

    color: ${({ color }) => handleVariable(color, 'xl')};

    opacity: ${({ opacity }) => handleValue(opacity, 'xl')};
  }
`;
