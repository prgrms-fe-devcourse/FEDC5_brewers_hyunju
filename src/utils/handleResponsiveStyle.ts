import { ResponsiveStyleType } from '~/types/design/common';

export const handleSize = (
  size?: string | number | ResponsiveStyleType,
  bp?: keyof ResponsiveStyleType
) => {
  switch (typeof size) {
    case 'undefined':
      return undefined;
    case 'object':
      if (bp && size[bp]) {
        return typeof size[bp] === 'number' ? `${size[bp]}rem` : size[bp];
      } else {
        return undefined;
      }
    case 'number':
      if (!bp || bp === 'base') {
        return `${size}rem`;
      } else {
        return undefined;
      }
    case 'string':
      if (!bp || bp === 'base') {
        return size;
      } else {
        return undefined;
      }
    default:
      return undefined;
  }
};

export const handleVariable = <T>(
  color?: string | number | ResponsiveStyleType<T>,
  bp?: keyof ResponsiveStyleType<T>
) => {
  switch (typeof color) {
    case 'undefined':
      return undefined;
    case 'object':
      if (bp && color[bp]) {
        return `var(${color[bp]})`;
      } else {
        return undefined;
      }
    case 'number':
    case 'string':
      if (!bp || bp === 'base') {
        return `var(${color})`;
      } else {
        return undefined;
      }
    default:
      return undefined;
  }
};

export const handleValue = (
  size?: string | number | ResponsiveStyleType,
  bp?: keyof ResponsiveStyleType
) => {
  switch (typeof size) {
    case 'undefined':
      return undefined;
    case 'object':
      if (bp && size[bp]) {
        return size[bp]?.toString();
      } else {
        return undefined;
      }
    default:
      if (!bp || bp === 'base') {
        return size.toString();
      } else {
        return undefined;
      }
  }
};
