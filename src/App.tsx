import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/common/NavBar';
import { useRecoilState } from 'recoil';
import { userState } from './recoil/login/atoms';
import { getItem } from './utils/localStorage';
import axiosInstance from './api/axios';
import { AuthUserResponseType } from './types/api/auth';
import UserStateListSideBar from './components/UserStateListSideBar';

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
      <Outlet />
      <UserStateListSideBar />
    </>
  );
}

export default App;
