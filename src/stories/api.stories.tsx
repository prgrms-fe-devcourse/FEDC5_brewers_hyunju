import useLogin from '~/hooks/api/auth/useLogin';
export default {
  title: 'Hooks/API',
};

export const UseLogin = () => {
  const { handleLogin, status, error } = useLogin();
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin({
            email: 'admin@programmers.co.kr',
            password: 'programmers',
          });
        }}
      >
        올바른 로그인
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin({
            email: 'ddmin@programmers.co.kr',
            password: 'programmers',
          });
        }}
      >
        잘못된 로그인
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin({
            email: '',
            password: 'programmers',
          });
        }}
      >
        빈 input 로그인
      </button>
      {status}
      {status === 'loading' && 'Loading'}
      {status === 'error' && error}
      {status === 'success' && <div>Login 완료</div>}
    </>
  );
};
