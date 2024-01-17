import styled from '@emotion/styled';
import { Link, useNavigate } from 'react-router-dom';

import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import Image from '~/components/common/Image';
import useMessageSeen from '~/hooks/api/conversation/useMessageSeen';

interface DMItemPropsType {
  userName: string;
  message: string;
  size?: 'md' | 'lg';
  src?: string;
  seen: boolean;
  userId: string;
}

interface ClampTextPropsType {
  size?: string;
}

const ClampText = styled(Text)<ClampTextPropsType>`
  display: -webkit-box;
  overflow: hidden;

  width: 100%;

  line-height: 1.2;
  text-align: left;

  -webkit-box-orient: vertical;

  -webkit-line-clamp: 2;

  text-overflow: ellipsis;
  word-wrap: break-word;
`;

const TextContainer = styled.div`
  overflow: hidden;

  width: 40rem;
  height: fit-content;
  margin: 1rem auto;
  padding: var(--padding-lg);
  border: 1px solid var(--secondaryColor);
`;

const AvatarContainer = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
`;

const Badge = styled.div`
  top: 1.75rem;
  left: 2rem;

  width: 0.75rem;
  height: 0.75rem;
  border-radius: 100%;

  background-color: var(--secondaryColor);
`;

const DMItem = ({
  src,
  userName,
  message = '',
  size = 'md',
  seen,
  userId,
}: DMItemPropsType) => {
  const { handleMessageSeen } = useMessageSeen();
  const navigate = useNavigate();

  const messageSize = size === 'md' ? 'sm' : 'md';

  return (
    <Flex
      direction='row'
      alignItems='center'
      gap={0.75}
    >
      <TextContainer>
        <Flex
          alignItems='center'
          gap={1}
        >
          <AvatarContainer>
            <Link to={`/profile/${userId}`}>
              <Image
                width={3.5}
                height={3.5}
                alt={`${userName}`}
                src={src}
              />
            </Link>
          </AvatarContainer>
          <div
            style={{
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => {
              handleMessageSeen({ sender: userId });
              navigate(`/message/${userId}`);
            }}
          >
            <Flex
              direction='column'
              alignItems='flex-start'
              grow={1}
              gap={0.25}
            >
              <Flex
                alignItems='center'
                gap={0.25}
                grow={1}
              >
                <Text size={size}>{userName}</Text>
                {!seen && <Badge />}
              </Flex>
              <ClampText
                size={messageSize}
                color='--adaptive400'
              >
                {message}
              </ClampText>
            </Flex>
          </div>
        </Flex>
      </TextContainer>
    </Flex>
  );
};

export default DMItem;
