import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SignupTemplate from '~/components/templates/SignupTemplate';

import useSignup from '~/hooks/api/signup/useSignup';

const SignupPage = () => {
  const navigate = useNavigate();

  const [userSignupInfo, setUserSignupInfo] = useState({
    fullName: '',
    email: '',
    password: '',
    checkPassword: '',
  });
  const [formErrorMessage, setFormErrorMessage] = useState<string>('');
  const [userSignupInfoIsError, setUserSignupInfoIsError] = useState({
    fullName: false,
    email: false,
    password: false,
    checkPassword: false,
  });
  const beforeState = useRef({
    fullName: '',
    email: '',
    password: '',
    checkPassword: '',
  });

  const { handleSignup, status } = useSignup();

  const onChange = (text: string, inputName: string) => {
    beforeState.current = { ...userSignupInfo };
    setUserSignupInfo({ ...userSignupInfo, [inputName]: text });
    setUserSignupInfoIsError({ ...userSignupInfoIsError, [inputName]: !text });
    setFormErrorMessage('');
  };

  const isSameInputAsBefore = () => {
    return (
      beforeState.current.fullName === userSignupInfo.fullName &&
      beforeState.current.email === userSignupInfo.email &&
      beforeState.current.password === userSignupInfo.password &&
      beforeState.current.checkPassword === userSignupInfo.checkPassword
    );
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSameInputAsBefore()) {
      return;
    }

    const isError = {
      fullName: false,
      email: false,
      password: false,
      checkPassword: false,
    };

    if (!userSignupInfo.fullName) {
      isError.fullName = true;
    }
    if (!userSignupInfo.email) {
      isError.email = true;
    }
    if (!userSignupInfo.password) {
      isError.password = true;
    }
    if (!userSignupInfo.checkPassword) {
      isError.checkPassword = true;
    }

    beforeState.current = { ...userSignupInfo };

    setUserSignupInfoIsError(isError);

    if (userSignupInfo.password !== userSignupInfo.checkPassword) {
      return;
    }

    if (
      userSignupInfo.fullName &&
      userSignupInfo.email &&
      userSignupInfo.password &&
      userSignupInfo.checkPassword
    ) {
      handleSignup({
        email: userSignupInfo.email,
        password: userSignupInfo.password,
        fullName: userSignupInfo.fullName,
      });
    }
  };

  useEffect(() => {
    switch (status) {
      case 'success':
        navigate('/');
        break;
      case 'error':
        setFormErrorMessage('다른 이메일을 입력해 주세요');
        break;
      default:
        break;
    }
  }, [status, navigate]);

  return (
    <SignupTemplate
      onChange={onChange}
      onSubmit={onSubmit}
      userSignupInfo={userSignupInfo}
      status={status}
      formErrorMessage={formErrorMessage}
      userSignupInfoIsError={userSignupInfoIsError}
    />
  );
};

export default SignupPage;
