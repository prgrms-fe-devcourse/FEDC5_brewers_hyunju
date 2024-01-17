import { useState, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';
import Logo from '~/components/common/Logo';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import useLogout from '~/hooks/api/auth/useLogout';
import { removeItem } from '~/utils/localStorage';
import { postModalState } from '~/recoil/postModal/atoms';
import BasicPostModal from '~/components/postModal/BasicPostModal';
import ThemeSelectModal from './ThemeSelectModal';
import ThemeSelectButton from './ThemeSelectButton';
import { useMediaQuery } from 'react-responsive';

export interface NavItemPropsType {
  to: string;
  children: ReactNode;
}

// nav 아이템
const NavItem = ({ to, children }: NavItemPropsType) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  // active시 밑줄 & 색 변경
  const NavBarItemWithUnderline = styled(NavBarItem)`
    flex-shrink: 0;

    height: 2rem;
    border-bottom: ${isActive ? '2px solid var(--primaryColor)' : 'none'};

    color: ${isActive ? 'var(--adaptive950)' : 'none'};

    box-sizing: border-box;
  `;

  return (
    <Link
      to={to}
      style={{
        textDecoration: 'none',
        marginLeft: '1rem',
        boxSizing: 'border-box',
      }}
    >
      <NavBarItemWithUnderline>{children}</NavBarItemWithUnderline>
    </Link>
  );
};

const AuthNavItem = () => {
  const [user, setUser] = useRecoilState(userState);
  const { request: requestLogout } = useLogout();

  const handleLogout = async () => {
    await requestLogout();
    await removeItem('accessToken');
    await setUser(null);
  };

  return (
    <>
      {user ? (
        <>
          <NavItem to={`/profile/${user._id}`}>{user.fullName} 님</NavItem>
          <NavBarItem
            onClick={handleLogout}
            style={{ marginBottom: '2px' }}
          >
            로그아웃
          </NavBarItem>
        </>
      ) : (
        <NavItem to='/login'>로그인</NavItem>
      )}
    </>
  );
};

const NavBar = () => {
  const setPostModalOpen = useSetRecoilState(postModalState);
  const [isShowThemeSelector, setIsShowThemeSelector] = useState(false);
  const isSmall = useMediaQuery({ maxWidth: 56 * 16 });

  const NavBarLarge = () => {
    return (
      <>
        <Flex
          alignItems='center'
          justifyContent='flex-start'
          style={{ flexShrink: '0', boxSizing: 'border-box', height: '100%' }}
        >
          <Logo
            type='normal'
            size='sm'
          ></Logo>

          <NavItem to='/'>홈</NavItem>
          <NavItem to='/message'>채팅</NavItem>
          <NavItem to='/notification'>알림</NavItem>
        </Flex>
        <Flex
          alignItems='center'
          justifyContent='flex-end'
          style={{ flexShrink: '0' }}
        >
          <ThemeSelectButton onClick={() => setIsShowThemeSelector(true)} />
          <Button
            variant='outlined'
            size='md'
            color='--primaryColor'
            ml={1}
            style={{ width: '7.5rem', height: '3.125rem' }}
            onClick={() =>
              setPostModalOpen((prev) => ({
                ...prev,
                isOpen: true,
              }))
            }
          >
            포스트 작성
          </Button>
          <NavItem to='/search'>검색</NavItem>
          <AuthNavItem />
        </Flex>
        <BasicPostModal />
        <ThemeSelectModal
          visible={isShowThemeSelector}
          handleClose={() => setIsShowThemeSelector(false)}
        />
      </>
    );
  };

  const NavBarSmall = () => {
    return (
      <Flex
        alignItems='center'
        justifyContent='space-between'
        style={{ flexShrink: '0', width: '100%' }}
      >
        <Logo
          type='simple'
          size='sm'
        ></Logo>
        <NavItem to='/message'>채팅</NavItem>
        <NavItem to='/notification'>알림</NavItem>
        <NavItem to='/search'>검색</NavItem>
        <AuthNavItem />
      </Flex>
    );
  };

  return <NavWrapper>{isSmall ? <NavBarSmall /> : <NavBarLarge />}</NavWrapper>;
};

export default NavBar;

const NavWrapper = styled(Flex)`
  display: flex;
  justify-content: space-between;
  overflow: auto;
  position: relative;
  z-index: 0;

  /* overflow: hidden; */

  width: 100%;
  height: 5rem;
  max-width: 100%;
  margin-bottom: 2rem;
  padding: 0 3.5rem;

  background-color: var(--adaptive50);

  box-sizing: border-box;

  text-decoration: none;
`;

const NavBarItem = styled.li`
  flex-shrink: 0;

  margin: 0 0.85rem;
  padding: 0.425rem 0.45rem;

  color: var(--adaptive400);
  font-weight: 400;
  font-size: 1rem;

  box-sizing: border-box;

  cursor: pointer;
  list-style: none;
  text-decoration: none;

  &:has(button) {
    margin: 0;
    padding: 0;
  }

  &:hover {
    color: var(--adaptive950);
  }
`;
