import { useRecoilState, useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';

import NavBar from './components/common/NavBar';

import { loginState, userState } from './recoil/login/atoms';

function App() {
  const [isLoggedin, onLogout] = useRecoilState(loginState);
  const user = useRecoilValue(userState);

  return (
    <>
      <NavBar
        isLoggedIn={isLoggedin}
        userName={user ? user.fullName : ''}
        onLogout={() => onLogout(false)}
      />
      <Outlet />
    </>
  );
}

export default App;
