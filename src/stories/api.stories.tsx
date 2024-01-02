import { useRequestFn } from '~/api';
import { LoginResponseType } from '~/types/api/auth';
export default {
  title: 'Hook/api',
};

export const Login = () => {
  const { request, status, data } = useRequestFn<LoginResponseType>({
    method: 'post',
    baseURL: import.meta.env.STORYBOOK_APP_BASE_URL,
    url: '/login',
  });

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          request({
            data: {
              email: 'admin@programmers.co.kr',
              password: 'programmers',
            },
          });
        }}
      >
        올바른 로그인
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          request({
            data: {
              email: 'adin@programmers.co.kr',
              password: 'programmers',
            },
          });
        }}
      >
        잘못된 로그인
      </button>
      {status === 'loading' && 'Loading'}
      {status === 'error' && 'error'}
      {status === 'success' && <div>{data.token}</div>}
    </>
  );
};
