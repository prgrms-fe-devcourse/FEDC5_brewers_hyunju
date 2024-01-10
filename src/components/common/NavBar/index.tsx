import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Button from '~/components/common/Button';
import Tabs from '~/components/common/Tabs';
import Logo from '~/components/common/Logo';

export interface NavBarPropsType {
  isLoggedIn: boolean;
  userName: string;
  onLogout: () => void;
}

export interface NavItemPropsType {
  to: string;
  children: React.ReactNode;
}

const Box = styled.div`
  width: 15rem;
  padding-bottom: 0.375rem;
`;

const NavBarItem = styled.li`
  flex-shrink: 0;

  padding: 0.625rem 1.25rem;

  color: var(--adaptive400);
  font-weight: 400;
  font-size: 1rem;

  cursor: pointer;
  list-style: none;
  text-decoration: none;

  &:has(button) {
    padding: 0;
  }

  &:hover {
    color: var(--adaptive950);
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
        <NavItem to={`/user/${userName}`}>{userName}</NavItem>
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
        overflow: 'scroll',
        margin: '0',
        width: '100%',
        height: '5rem',
        display: 'flex',
        justifyContent: 'space-between',
        textDecoration: 'none',
        padding: '0 3.75rem',
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
        <Logo
          type='normal'
          size='sm'
        ></Logo>
        <Flex
          justifyContent='flex-start'
          ml={1}
          style={{ flexShrink: '0' }}
        >
          <Box>
            <Tabs
              isFull={false}
              gap={2.5}
              fontSize='md'
              fontWeight={400}
            >
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
            </Tabs>
          </Box>
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
            style={{ width: '7.5rem', height: '3.125rem' }}
          >
            포스트 작성
          </Button>
        </NavItem>
        <NavItem to='/search'>검색</NavItem>
        <AuthNavItem
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLogout={onLogout}
        ></AuthNavItem>
      </Flex>
    </Container>
  );
};

export default NavBar;
