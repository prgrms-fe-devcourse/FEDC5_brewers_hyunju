import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import LoginTemplate from '~/components/templates/LoginTemplate';

import useLogin from '~/hooks/api/auth/useLogin';

const LoginPage = () => {
  const navigate = useNavigate();

  const [userLoginInfo, setUserLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [userLoginInfoIsError, setUserLoginInfoIsError] = useState({
    email: false,
    password: false,
  });
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const beforeState = useRef({
    email: '',
    password: '',
  });

  const { handleLogin, status, error } = useLogin();

  const onChange = (text: string, InputName: string) => {
    setUserLoginInfo({ ...userLoginInfo, [InputName]: text });
    setFormErrorMessage('');
    setUserLoginInfoIsError({ ...userLoginInfoIsError, [InputName]: !text });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSameInputAsBefore()) return;
    beforeState.current = { ...userLoginInfo };

    setUserLoginInfoIsError({ email: false, password: false });

    if (!userLoginInfo.email) {
      setUserLoginInfoIsError((error) => {
        return { ...error, email: true };
      });
    }
    if (!userLoginInfo.password) {
      setUserLoginInfoIsError((error) => {
        return { ...error, password: true };
      });
    }

    handleLogin(userLoginInfo);
  };

  const isSameInputAsBefore = () => {
    return (
      beforeState.current.email === userLoginInfo.email &&
      beforeState.current.password === userLoginInfo.password
    );
  };

  useEffect(() => {
    switch (status) {
      case 'success':
        navigate('/');
        break;
      case 'error':
        setFormErrorMessage('이메일 또는 비밀번호를 확인해 주세요');
        break;
      default:
        break;
    }
  }, [status, navigate]);

  return (
    <>
      <Helmet>
        <title>로그인</title>
      </Helmet>
      <LoginTemplate
        onChange={onChange}
        onSubmit={onSubmit}
        status={status}
        error={error}
        userLoginInfo={userLoginInfo}
        formErrorMessage={formErrorMessage}
        userLoginInfoIsError={userLoginInfoIsError}
      />
    </>
  );
};

export default LoginPage;
