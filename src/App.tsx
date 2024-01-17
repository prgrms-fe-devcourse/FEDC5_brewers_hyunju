import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from './components/common/NavBar';
import { useRecoilState } from 'recoil';
import { userState } from './recoil/login/atoms';
import { getItem } from './utils/localStorage';
import axiosInstance from './api/axios';
import { AuthUserResponseType } from './types/api/auth';
import UserStateListSideBar from './components/UserStateListSideBar';
import { CONTAINER_SIZE } from '~/constants/design';

function App() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    if (!user) {
      const accessToken = getItem('accessToken', undefined);

      if (!accessToken) return;

      axiosInstance<AuthUserResponseType>({
        method: 'get',
        url: '/auth-user',
      }).then((res) => setUser(res.data));
    }
  }, []);

  return (
    <>
      <NavBar />
      <PageGrid>
        <BorderBox>
          <UserStateListSideBar />
        </BorderBox>
        <BorderBox>
          <Outlet />
        </BorderBox>
        <BorderBox></BorderBox>
      </PageGrid>
    </>
  );
}

export default App;

const PageGrid = styled.div`
  display: grid;

  box-sizing: border-box;

  /* width: 100%; */

  grid-template-columns: 12rem 1fr 12rem;

  @media screen and (width <= ${CONTAINER_SIZE['xl']}) {
    grid-template-columns: 6rem 1fr 6rem;
  }

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    grid-template-columns: 1fr;
    grid-template-rows: 14rem 1fr;
  }
`;

const BorderBox = styled.div`
  box-sizing: border-box;
`;
