import LogoNormal from '~/assets/logo-normal.svg';
import LogoSimple from '~/assets/logo-simple.svg';
import { LOGO_SIZE } from '~/constants/design';
import styled from 'styled-components';

export interface LogoPropsType {
  type: 'normal' | 'simple';
  size: 'sm' | 'md' | 'lg';
  handleClick?: () => void;
}
const Logo = ({ handleClick, type, size }: LogoPropsType) => {
  return (
    <LogoWrapper
      onClick={handleClick}
      className='logo'
    >
      {/* TODO: 47-Feat 머지 후 Image 컴포넌트로 교체*/}
      {/* <Image
        width={LOGO_SIZE[size].width}
        height={}
        src={type === 'normal' ? LogoNormal : LogoSimple}
        lazy={false}
        alt='Brewers'
      /> */}
      <ImageStyled
        src={type === 'normal' ? LogoNormal : LogoSimple}
        width={LOGO_SIZE[type][size].width}
        height={LOGO_SIZE[type][size].height}
      />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 3px;
  border-radius: 0.25rem;

  cursor: pointer;

  transition: 0.2s background-color ease-in;

  /* transition: 0.2s opacity ease-in; */

  &:hover {
    background-color: var(--adaptive300);

    /* opacity: 0.7; */
  }
`;
const ImageStyled = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
