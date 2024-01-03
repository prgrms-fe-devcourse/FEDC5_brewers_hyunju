import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import { Property } from 'csstype';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import ContainerSizeType from '~/types/design/container';
import styled from 'styled-components';

interface PostCommentListItemPropsType {
  userName: string;
  userNameSize?: FontSizeType;
  userNameWeight?: FontWeightType;
  time: string;
  message: string;
  messageSize?: FontSizeType;
  messageWeight?: FontWeightType;
  avatar?: string;
  width?: ContainerSizeType;
}

interface SpacerPropsType {
  padding: Property.Padding;
}

interface AvatarPropsType {
  avatar?: string;
}

const PostCommentListItem = ({
  userName,
  userNameSize = 'sm',
  userNameWeight = 600,
  time,
  message = '',
  messageSize = 'sm',
  messageWeight = 400,
  avatar = '',
  width = 'sm',
}: PostCommentListItemPropsType) => {
  const avatarSize = '3.5rem';
  const TextContainer = styled.div`
    width: calc(100% - 3.5rem - 0.75rem);
  `;

  const Spacer = styled.div<SpacerPropsType>`
    padding: ${(props) => `${props.padding}rem`};
  `;

  const AvatarContainer = styled.div`
    overflow: hidden;

    width: ${avatarSize};
    height: ${avatarSize};
    border-radius: 100%;
  `;

  const Avatar = styled.img<AvatarPropsType>`
    width: ${avatarSize};
    height: ${avatarSize};

    background-color: var(--adaptive300);

    alt: 'avatar';

    src: ${(props) => props.avatar};
  `;

  const AvatarDefault = styled.div`
    width: ${avatarSize};
    height: ${avatarSize};

    background-color: var(--adaptive300);

    alt: 'avatar';
  `;

  return (
    <Container maxWidth={width}>
      <Spacer padding='0.75'>
        <Flex
          direction='row'
          alignItems='start'
          gap={0.75}
        >
          {avatar ? (
            <AvatarContainer>
              <Avatar avatar={avatar} />
            </AvatarContainer>
          ) : (
            <AvatarContainer>
              <AvatarDefault />
            </AvatarContainer>
          )}
          <TextContainer>
            <Flex
              direction='column'
              alignItems='flex-start'
              gap={0.25}
            >
              <Flex
                direction='column'
                gap={0.1}
              >
                <Text
                  size={userNameSize}
                  weight={userNameWeight}
                >
                  {userName}
                </Text>
                <Text
                  size='sm'
                  weight={400}
                  color='--adaptive400'
                >
                  {time}
                </Text>
              </Flex>
              <Text
                size={messageSize}
                weight={messageWeight}
              >
                {message}
              </Text>
            </Flex>
          </TextContainer>
        </Flex>
      </Spacer>
    </Container>
  );
};

export default PostCommentListItem;
