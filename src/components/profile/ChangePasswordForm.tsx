import styled from '@emotion/styled';
import Button from '../common/Button';
import Input from '../input/Input';
import { FormEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userState } from '~/recoil/login/atoms';
import useUpdatePassword from '~/hooks/api/settings/useUpdatePassword';

export interface ChangePasswordFromPropsType {
  onSuccess?: () => void;
  onFail?: () => void;
  onFinally?: () => void;
}

const ChangePasswordForm = (props: ChangePasswordFromPropsType) => {
  const auth = useRecoilValue(userState);

  const { request: updatePassword } = useUpdatePassword();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    new_password: '',
    new_password_repeat: '',
  });

  const handleChange = (text: string, name: string) =>
    setFormData({ ...formData, [name]: text });

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();

    if (formData.new_password.length < 1) {
      return alert('비밀번호를 입력해주세요.');
    }

    if (formData.new_password !== formData.new_password_repeat) {
      return alert('비밀번호가 일치하지 않습니다.');
    }

    try {
      setIsLoading(true);
      await updatePassword(formData.new_password);
      alert('비밀번호 변경 완료');
      props.onSuccess && props.onSuccess();
    } catch {
      alert('비밀번호 변경 실패');
      props.onFail && props.onFail();
    } finally {
      setIsLoading(false);
      props.onFinally && props.onFinally();
    }
  };

  return (
    <Form onSubmit={handleSumbit}>
      {/* <Input
        type='password'
        InputName='old_password'
        onChange={() => {}}
        placeholder='기존 비밀번호'
        disabled={!auth}
      /> */}
      <Input
        type='password'
        InputName='new_password'
        onChange={handleChange}
        placeholder='새로운 비밀번호'
        disabled={!auth || isLoading}
      />
      <Input
        type='password'
        InputName='new_password_repeat'
        onChange={handleChange}
        placeholder='비밀번호 확인'
        disabled={!auth || isLoading}
      />
      <Button
        variant='filled'
        size='lg'
        color='--primaryColor'
        disabled={
          !auth ||
          isLoading ||
          formData.new_password.length === 0 ||
          formData.new_password_repeat.length === 0
        }
      >
        변경
      </Button>
    </Form>
  );
};

export default ChangePasswordForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 2rem 0;

  gap: 0.5rem;
`;