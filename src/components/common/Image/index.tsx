import styled from '@emotion/styled';
import useIntersectionObserver from '~/hooks/useIntersectionObserver';
import ColorType from '~/types/design/color';
import { handleSizeUnit } from '~/utils/handleSizeUnit';

export type ImageModeType = 'cover' | 'contain' | 'fill';
export interface ImagePropsType {
  lazy?: boolean;
  threshold?: number;
  placeholder?: string;
  src?: string;
  block?: boolean;
  width: number | string;
  height: number | string;
  ratio?: number | string;
  alt: string;
  mode?: ImageModeType;
  letterBoxColor?: ColorType;
}

interface ImageStylePropsType {
  block?: boolean;
  mode: ImageModeType;
}
const Image = ({
  lazy,
  threshold = 0.5,
  width,
  height,
  ratio,
  placeholder = '/img/default_profile.svg',
  src = placeholder,
  block,
  alt,
  mode = 'contain',
  letterBoxColor = '--adaptive950',
}: ImagePropsType) => {
  const { loaded, targetRef } = useIntersectionObserver<HTMLImageElement>(
    'imageLoad',
    lazy ? lazy : false,
    threshold
  );
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (targetRef.current) {
      targetRef.current.src = placeholder;
    } else {
      e.currentTarget.src = placeholder;
    }
  };
  return (
    <LetterBoxDiv
      block={block}
      letterBoxColor={letterBoxColor}
      width={width}
      height={height}
      ratio={ratio}
    >
      <ImageStyled
        ref={targetRef}
        src={loaded ? src : placeholder}
        alt={alt}
        mode={mode}
        onError={handleImageError}
      />
    </LetterBoxDiv>
  );
};

export default Image;

const LetterBoxDiv = styled.div<{
  block?: boolean;
  letterBoxColor: ColorType;
  width: number | string;
  height?: number | string;
  ratio?: number | string;
}>`
  display: ${({ block }) => (block ? undefined : 'inline-block')};

  width: ${({ width }) => handleSizeUnit(width)};
  ${({ ratio, height }) =>
    ratio
      ? `aspect-ratio: ${ratio};`
      : height && `height: ${handleSizeUnit(height)};`}

  background-color: ${({ letterBoxColor }) => `var(${letterBoxColor})`};

  box-sizing: border-box;
`;
const ImageStyled = styled.img<ImageStylePropsType>`
  display: block;

  width: 100%;
  height: 100%;

  object-fit: ${({ mode }) => mode};
`;
