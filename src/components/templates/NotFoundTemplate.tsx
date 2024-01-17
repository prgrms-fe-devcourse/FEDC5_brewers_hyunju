import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button';
import StyledContainer from '~/components/common/Container';
import NavBar from '~/components/common/NavBar';
import Text from '~/components/common/Text';

const NotFoundTemplate = () => {
  const navigator = useNavigate();

  return (
    <>
      <NavBar />
      <Container
        maxWidth='md'
        p={2}
      >
        <Text
          size='2xl'
          weight={800}
        >
          404 Not Found
        </Text>
        <Text>페이지를 찾을 수 없어요.</Text>
        <Button
          variant='filled'
          size='md'
          color='--primaryColor'
          onClick={() => navigator('/')}
        >
          홈으로 돌아가기
        </Button>
      </Container>
    </>
  );
};

export default NotFoundTemplate;

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: var(--radius-lg);

  gap: 1rem;
`;
