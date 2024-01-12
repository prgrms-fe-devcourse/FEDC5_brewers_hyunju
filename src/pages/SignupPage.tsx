import { useState } from 'react';

const SignupPage = () => {
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

  const { handleSignup, status } = useSignup();

  const onChange = (text: string, inputName: string) => {
    setUserSignupInfo({ ...userSignupInfo, [inputName]: text });
    setUserSignupInfoIsError({ ...userSignupInfoIsError, [inputName]: !text });
    setFormErrorMessage('');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
