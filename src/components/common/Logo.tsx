import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import LogoNormal from '~/assets/logo-normal.svg?react';
import LogoSimple from '~/assets/logo-simple.svg?react';
import { LOGO_SIZE } from '~/constants/design';

export interface LogoPropsType {
  type: 'normal' | 'simple';
  size: 'sm' | 'md' | 'lg';
}
const Logo = ({ type, size }: LogoPropsType) => {
  return (
    <Link to='/'>
      <LogoWrapper className='logo'>
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
    </Link>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.625rem;
  border-radius: var(--radius-xs);

  cursor: pointer;

  transition: 0.2s background-color ease-in;

  &:hover {
    background-color: var(--adaptive200);
  }
`;
