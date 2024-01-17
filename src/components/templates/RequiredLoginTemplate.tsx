import styled from '@emotion/styled';
import Button from '../common/Button';
import Container from '../common/Container';
import Text from '../common/Text';
import { useNavigate } from 'react-router-dom';

const RequiredLoginTemplate = () => {
  const navigator = useNavigate();

  return (
    <Container
      maxWidth='md'
      p={2}
    >
      <Header>
        <Text
          size='2xl'
          weight={800}
        >
          안내
        </Text>
      </Header>
      <Content>
        <Text>로그인이 필요합니다.</Text>
        <Button
          variant='filled'
          size='md'
          color='--primaryColor'
          onClick={() => navigator('/login')}
        >
          로그인 페이지로 이동
        </Button>
      </Content>
    </Container>
  );
};

export default RequiredLoginTemplate;

const Header = styled.div`
  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.5rem;
`;
