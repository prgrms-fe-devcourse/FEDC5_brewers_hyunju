import styled from '@emotion/styled';
import Button from '../common/Button';
import StyledContainer from '../common/Container';
import Text from '../common/Text';
import { useNavigate } from 'react-router-dom';

const RequiredLoginTemplate = () => {
  const navigator = useNavigate();

  return (
    <Container
      maxWidth='md'
      p={2}
    >
      <Text
        size='2xl'
        weight={800}
      >
        로그인이 필요합니다.
      </Text>
      <Text>로그인이 필요한 페이지입니다.</Text>
      <Button
        variant='filled'
        size='md'
        color='--primaryColor'
        onClick={() => navigator('/login')}
      >
        로그인 페이지로 이동
      </Button>
    </Container>
  );
};

export default RequiredLoginTemplate;

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: var(--radius-lg);

  gap: 1rem;
`;
