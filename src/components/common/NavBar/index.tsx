import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';
// Tabs 컴포넌트 import 필요

export interface NavBarPropsType {
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
}

export interface NavItemPropsType {
  to: string;
  children: React.ReactNode;
}

const NavBarItem = styled.li`
  list-style: none;
  text-decoration: none;
  color: var(--adaptive900);
  flex-shrink: 0;
  padding: 10px 20px;
  cursor: pointer;

  &:has(button) {
    padding: 0;
  }
`;

const NavItem = ({ to, children }: NavItemPropsType) => (
  <Link
    to={to}
    style={{
      textDecoration: 'none',
      marginLeft: '1rem',
    }}
  >
    <NavBarItem>{children}</NavBarItem>
  </Link>
);

const AuthNavItem = ({ isLoggedIn, userName, onLogout }: NavBarPropsType) => (
  <>
    {isLoggedIn ? (
      <>
        {/* Avatar 컴포넌트 import 필요 */}
        <NavItem to={'/userName'}>{userName}</NavItem>
        <NavBarItem
          onClick={onLogout}
          style={{ marginLeft: '1rem' }}
        >
          로그아웃
        </NavBarItem>
      </>
    ) : (
      <NavItem to='/login'>로그인</NavItem>
    )}
  </>
);

const NavBar = ({ isLoggedIn, userName, onLogout }: NavBarPropsType) => {
  const navigate = useNavigate();

  const handleTabClick = (link: string) => {
    navigate(link);
  };

  return (
    <Container
      maxWidth='xl'
      style={{
        maxWidth: '100%',
        margin: '0',
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        textDecoration: 'none',
        padding: '0 60px',
        boxSizing: 'border-box',
      }}
    >
      {/* Nav 왼쪽 부분 (로고, 홈. 그룹, 채팅) */}
      <Flex
        alignItems='center'
        justifyContent='flex-start'
        style={{ flexShrink: '0' }}
      >
        {/* brewers 로고 */}
        <NavBarItem>Brewers</NavBarItem>
        <Flex
          justifyContent='flex-start'
          style={{ flexShrink: '0' }}
        >
          {/* <Tabs {...args}>
          <Tabs.Header>
            <Tabs.Item
              text='홈'
              id={0}
              handleClick={() => {
                handleTabClick('/home');
              }}
            />
            <Tabs.Item
              text='그룹'
              id={1}
              handleClick={() => {
                handleTabClick('/group');
              }}
            />
            <Tabs.Item
              text='채팅'
              id={2}
              handleClick={() => {
                handleTabClick('/chat');
              }}
            />
          </Tabs.Header>
        </Tabs> */}
        </Flex>
      </Flex>
      {/* Nav 오른쪽 부분 (포스트작성, 검색, 로그인)*/}
      <Flex
        alignItems='center'
        justifyContent='flex-end'
        style={{ flexShrink: '0' }}
      >
        <NavItem to='/post'>
          <Button
            variant='outlined'
            size='md'
            color='--primaryColor'
            style={{ width: '120px', height: '50px' }}
          >
            포스트 작성
          </Button>
        </NavItem>
        <NavItem to='/search'>검색</NavItem>
        <AuthNavItem
          isLoggedIn={isLoggedIn}
          userName={`/user/${userName}`}
          onLogout={onLogout}
        ></AuthNavItem>
      </Flex>
    </Container>
  );
};

export default NavBar;
