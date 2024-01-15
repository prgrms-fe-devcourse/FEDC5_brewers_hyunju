import styled from '@emotion/styled';

import Container from './common/Container';
import Flex from './common/Flex';
import Text from './common/Text';

export interface PersonalMessagePropsType {
  message: string;
  subject: 'you' | 'me';
  createdAt?: string | null;
  seen: boolean;
}

interface MessageDivPropsType {
  subject: 'you' | 'me';
  sideBorder: boolean;
}

const MessageDiv = styled(Text)<MessageDivPropsType>`
  padding: 0.5rem;
  border: 1px solid var(--secondaryColor);
  border-radius: ${({ sideBorder, subject }) =>
    !sideBorder
      ? '10px 10px 10px 10px'
      : subject === 'me'
        ? '10px 10px 0px 10px'
        : '10px 10px 10px 0px'};

  background-color: ${({ subject }) =>
    subject === 'me' ? 'var(--secondaryColor)' : 'var(--white)'};

  color: ${({ subject }) =>
    subject === 'me' ? 'var(--white)' : 'var(--secondaryColor)'};

  box-sizing: border-box;
`;

const PersonalMessage = ({
  message,
  createdAt,
  subject,
  seen,
}: PersonalMessagePropsType) => {
  const side = subject === 'me' ? 'end' : 'start';
  return (
    <Container maxWidth='sm'>
      <Flex
        direction='column'
        alignItems={side}
      >
        <Flex
          gap={0.25}
          direction={`${subject === 'you' ? 'row-reverse' : 'row'}`}
        >
          {createdAt ? (
            <Flex
              direction='column-reverse'
              alignItems='end'
            >
              <Text
                size='xs'
                color='--primaryColor'
                p={0.25}
              >
                {createdAt}
              </Text>
              <Text size='sm'>{!seen && '1'}</Text>
            </Flex>
          ) : null}
          <MessageDiv
            size='sm'
            subject={subject}
            sideBorder={!!createdAt}
            maxWidth={24}
          >
            {message}
          </MessageDiv>
        </Flex>
      </Flex>
    </Container>
  );
};
export default PersonalMessage;
