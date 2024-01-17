import styled from '@emotion/styled';
import Button from '../common/Button';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import useUpdateName from '~/hooks/api/settings/useUpdateName';

export interface NameChangeFormPropsType {
  onSuccess?: () => void;
  onFail?: () => void;
  onFinally?: () => void;
}

const NameChangeForm = (props: NameChangeFormPropsType) => {
  const [auth, setAuth] = useRecoilState(userState);

  const { request: updateName } = useUpdateName();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
  });

  useEffect(() => {
    if (auth) {
      setFormData({
        fullName: auth.fullName,
      });
    }
  }, [auth]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.fullName.length < 1) {
      return alert('이름을 입력해주세요.');
    }

    if (formData.fullName.length > 11) {
      return alert('이름은 최대 10글자입니다.');
    }

    try {
      setIsLoading(true);
      const res = await updateName(formData.fullName);
      res && setAuth(res);
      alert('이름 변경 완료');
      props.onSuccess && props.onSuccess();
    } catch {
      alert('이름 변경 실패');
      props.onFail && props.onFail();
    } finally {
      setIsLoading(false);
      props.onFinally && props.onFinally();
    }
  };

  return (
    <Form onSubmit={handleSumbit}>
      <Input
        type='text'
        name='fullName'
        onChange={handleChange}
        placeholder='이름'
        disabled={!auth || isLoading}
        value={formData.fullName}
        maxLength={10}
      />
      <Button
        type='submit'
        variant='filled'
        size='lg'
        color='--primaryColor'
        height={3.5}
        disabled={
          !auth ||
          isLoading ||
          formData.fullName.length === 0 ||
          formData.fullName === auth.fullName
        }
      >
        변경
      </Button>
    </Form>
  );
};

export default NameChangeForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl) 0;

  gap: 0.5rem;
`;

const Input = styled.input`
  height: 3.5rem;
  padding: var(--padding-xs) var(--padding-md);
  border: none;
  border-radius: var(--radius-xs);

  font-size: 1rem;

  box-sizing: border-box;
`;
