import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Button from '~/components/common/Button';
import StyledContainer from '~/components/common/Container';
import Text from '~/components/common/Text';

const UnauthorizedTemplate = () => {
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
        권한이 없습니다.
      </Text>
      <Text>권한이 없는 페이지입니다.</Text>
      <Button
        variant='filled'
        size='md'
        color='--primaryColor'
        onClick={() => navigator(-1)}
      >
        뒤로가기
      </Button>
    </Container>
  );
};

export default UnauthorizedTemplate;

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border-radius: var(--radius-lg);

  gap: 1rem;
`;
