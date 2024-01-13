import styled from '@emotion/styled';
import Image, { ImageModeType } from './Image';
import { AvatarSizeType } from '~/types/design/avatar';
import { AVATAR_SIZE } from '~/constants/design';
import ColorType from '~/types/design/color';

export interface AvatarPropsType {
  lazy?: boolean;
  threshold?: number;
  src?: string;
  placeholder?: string;
  alt?: string;
  mode?: ImageModeType;
  size: AvatarSizeType;
  hoverColor?: ColorType;
  handleClick: () => void;
}
const Avatar = ({
  lazy = true,
  threshold,
  src,
  placeholder,
  alt = '프로필 바로가기',
  mode,
  size,
  hoverColor = '--primaryColor',
  handleClick,
}: AvatarPropsType) => {
  return (
    <AvatarWrapper
      size={size}
      hoverColor={hoverColor}
      onClick={handleClick}
    >
      <Image
        block
        lazy={lazy}
        threshold={threshold}
        src={src}
        placeholder={placeholder}
        alt={alt}
        mode={mode}
        width={AVATAR_SIZE[size]}
        height={AVATAR_SIZE[size]}
      />
    </AvatarWrapper>
  );
};

export default Avatar;

const AvatarWrapper = styled.div<{
  size: AvatarSizeType;
  hoverColor: ColorType;
}>`
  overflow: hidden;

  width: ${({ size }) => AVATAR_SIZE[size]};
  height: ${({ size }) => AVATAR_SIZE[size]};
  border: ${({ size }) =>
    size === 'sm'
      ? `0.125rem solid var(--adaptive600)`
      : `0.25rem solid var(--adaptive600)`};
  border-radius: 50%;

  cursor: pointer;
  transition: border-color 0.2s ease-out;

  &:hover {
    border-color: ${({ hoverColor }) => `var(${hoverColor})`};
  }
`;
