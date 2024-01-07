import ContainerSizeType from './container';

export type ResponsiveStyleType<T = number | string> = {
  [key in ContainerSizeType | 'base']?: T;
};
