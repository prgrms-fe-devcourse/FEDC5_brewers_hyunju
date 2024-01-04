export const handleSizeUnit = (size: string | number) => {
  return typeof size === 'number' ? `${size}rem` : size;
};
