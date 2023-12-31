import { ButtonSizeType, ButtonVariantType } from '~/types/design/button';
import { AvatarSizeType } from '~/types/design/avatar';
import ColorType from '~/types/design/color';
import ContainerSizeType from '~/types/design/container';
import {
  FontSizeType,
  FontWeightType,
  LineHeightType,
} from '~/types/design/font';
import { LogoUnitType, LogoVarType } from '~/types/design/logo';

export const COLOR: ColorType[] = [
  '--primaryColor',
  '--secondaryColor',
  '--white',
  '--black',
  '--transparent',
  '--adaptive50',
  '--adaptive100',
  '--adaptive200',
  '--adaptive300',
  '--adaptive400',
  '--adaptive500',
  '--adaptive600',
  '--adaptive700',
  '--adaptive800',
  '--adaptive900',
  '--adaptive950',
  '--adaptiveOpacity50',
  '--adaptiveOpacity100',
  '--adaptiveOpacity200',
  '--adaptiveOpacity300',
  '--adaptiveOpacity400',
  '--adaptiveOpacity500',
  '--adaptiveOpacity600',
  '--adaptiveOpacity700',
  '--adaptiveOpacity800',
  '--adaptiveOpacity900',
  '--adaptiveOpacity950',
  '--whiteOpacity50',
  '--whiteOpacity100',
  '--whiteOpacity200',
  '--whiteOpacity300',
  '--whiteOpacity400',
  '--whiteOpacity500',
  '--whiteOpacity600',
  '--whiteOpacity700',
  '--whiteOpacity800',
  '--whiteOpacity900',
  '--whiteOpacity950',
  '--blackOpacity50',
  '--blackOpacity100',
  '--blackOpacity200',
  '--blackOpacity300',
  '--blackOpacity400',
  '--blackOpacity500',
  '--blackOpacity600',
  '--blackOpacity700',
  '--blackOpacity800',
  '--blackOpacity900',
  '--blackOpacity950',
  '--red50',
  '--red100',
  '--red200',
  '--red300',
  '--red400',
  '--red500',
  '--red600',
  '--red700',
  '--red800',
  '--red900',
  '--red950',
  '--green50',
  '--green100',
  '--green200',
  '--green300',
  '--green400',
  '--green500',
  '--green600',
  '--green700',
  '--green800',
  '--green900',
  '--green950',
  '--blue50',
  '--blue100',
  '--blue200',
  '--blue300',
  '--blue400',
  '--blue500',
  '--blue600',
  '--blue700',
  '--blue800',
  '--blue900',
  '--blue950',
];

export const FONT_SIZE_UNIT: FontSizeType[] = [
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
];

export const FONT_SIZE: { [K in FontSizeType]: string } = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.75rem',
};

export const FONT_WEIGHT_UNIT: FontWeightType[] = [400, 600, 800];

export const LINE_HEIGHT_UNIT: LineHeightType[] = [100, 125, 150, 175, 200];

export const LINE_HEIGHT: { [K in LineHeightType]: string } = {
  100: '1em',
  125: '1.25em',
  150: '1.5em',
  175: '1.75em',
  200: '2em',
};

export const CONTAINER_SIZE_UNIT: ContainerSizeType[] = [
  'sm',
  'md',
  'lg',
  'xl',
];

export const CONTAINER_SIZE: { [K in ContainerSizeType]: string } = {
  sm: '40rem',
  md: '48rem',
  lg: '64rem',
  xl: '80rem',
};

export const BUTTON_VARIANT: ButtonVariantType[] = [
  'filled',
  'outlined',
  'text',
];

export const BUTTON_SIZE_UNIT: ButtonSizeType[] = ['sm', 'md', 'lg'];

export const AVATAR_SIZE_UNIT: AvatarSizeType[] = ['sm', 'lg'];

export const AVATAR_SIZE: { [K in AvatarSizeType]: string } = {
  sm: '2.5rem',
  lg: '9.375rem',
};

export const LOGO_SIZE: {
  [K in LogoVarType]: LogoUnitType;
} = {
  normal: {
    sm: {
      width: '9.375rem',
      height: 'auto',
    },
    md: {
      width: '15.625rem',
      height: 'auto',
    },
    lg: {
      width: '25rem',
      height: 'auto',
    },
  },
  simple: {
    sm: {
      width: 'auto',
      height: '1.875rem',
    },
    md: {
      width: 'auto',
      height: '3.125rem',
    },
    lg: {
      width: 'auto',
      height: '4.875rem',
    },
  },
};
