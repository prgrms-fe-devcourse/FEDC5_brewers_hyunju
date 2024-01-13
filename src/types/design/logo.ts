export type LogoSizeType = 'sm' | 'md' | 'lg';

export type LogoVarType = 'simple' | 'normal';

export type LogoUnitType = {
  [K in LogoSizeType]: { width: string; height: string };
};
