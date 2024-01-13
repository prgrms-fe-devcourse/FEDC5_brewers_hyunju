import styled from '@emotion/styled';

import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';

interface DMItemPropsType {
  userName: string;
  message: string;
  size?: 'md' | 'lg';
  src?: string;
  seen: boolean;
}

interface ClampTextPropsType {
  size?: string;
}

interface AvatarPropsType {
  avatar?: string;
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
  padding: 1rem;
  border: 1px solid var(--secondaryColor);
`;

const AvatarContainer = styled.div`
  flex-shrink: 0;
  overflow: hidden;

  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
`;

const Avatar = styled.img<AvatarPropsType>`
  width: 3.5rem;
  height: 3.5rem;

  background-color: var(--adaptive300);

  alt: 'avatar';
  src: ${(props) => props.avatar};
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
}: DMItemPropsType) => {
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
            <Avatar src={src} />
          </AvatarContainer>
          <Flex
            direction='column'
            alignItems='flex-start'
            gap={0.25}
          >
            <Flex
              alignItems='center'
              gap={0.25}
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
        </Flex>
      </TextContainer>
    </Flex>
  );
};

export default DMItem;
