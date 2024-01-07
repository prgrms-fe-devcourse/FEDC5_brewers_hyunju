import LogoNormal from '~/assets/logo-normal.svg';
import LogoSimple from '~/assets/logo-simple.svg';
import { LOGO_SIZE } from '~/constants/design';
import styled from 'styled-components';
import Image from './Image';

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
      <Image
        width={LOGO_SIZE[type][size].width}
        height={LOGO_SIZE[type][size].height}
        src={type === 'normal' ? LogoNormal : LogoSimple}
        lazy={false}
        alt='Brewers 로고'
        letterBoxColor={'--transparent'}
      />
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.625rem;
  border-radius: 0.25rem;

  cursor: pointer;

  transition: 0.2s background-color ease-in;

  /* transition: 0.2s opacity ease-in; */

  &:hover {
    background-color: var(--adaptive200);

    /* opacity: 0.7; */
  }
`;
