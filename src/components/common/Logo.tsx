import styled from '@emotion/styled';
import LogoNormal from '~/assets/logo-normal.svg?react';
import LogoSimple from '~/assets/logo-simple.svg?react';
import { LOGO_SIZE } from '~/constants/design';

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
      {type === 'normal' ? (
        <LogoNormal
          width={LOGO_SIZE[type][size].width}
          height={LOGO_SIZE[type][size].height}
        />
      ) : (
        <LogoSimple
          width={LOGO_SIZE[type][size].width}
          height={LOGO_SIZE[type][size].height}
        />
      )}
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
