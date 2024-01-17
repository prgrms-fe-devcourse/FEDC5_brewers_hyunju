import styled from '@emotion/styled';
import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '~/components/common/Button';
import StyledContainer from '~/components/common/Container';
import Text from '~/components/common/Text';

const ErrorTemplate = () => {
  const navigator = useNavigate();
  const error = useRouteError() as Error;

  return (
    <Container
      maxWidth='md'
      p={2}
    >
      <Text
        size='2xl'
        weight={800}
      >
        Error
      </Text>
      <Text>에러가 발생했어요</Text>
      <Button
        variant='filled'
        size='md'
        color='--primaryColor'
        onClick={() => navigator('/')}
      >
        홈으로 돌아가기
      </Button>
      <Code>
        <Text weight={600}>{error.message}</Text>
        {error.stack}
      </Code>
    </Container>
  );
};

export default ErrorTemplate;

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: 1rem;

  gap: 1rem;
`;

const Code = styled.div`
  padding: 1rem;
  background-color: var(--adaptive200);
`;
