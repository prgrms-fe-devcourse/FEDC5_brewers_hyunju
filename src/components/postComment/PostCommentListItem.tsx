import styled from 'styled-components';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Avatar from '../common/Avatar';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import ContainerSizeType from '~/types/design/container';

export interface PostCommentListItemPropsType {
  userName: string;
  userNameSize?: FontSizeType;
  userNameWeight?: FontWeightType;
  message: string;
  messageSize?: FontSizeType;
  messageWeight?: FontWeightType;
  avatarSrc?: string;
  width?: ContainerSizeType;
  handleClick: () => void;
  createdAt: string;
  updatedAt: string;
}

const AvatarContainer = styled.div`
  flex-shrink: 0;
`;

const PostCommentListItem = ({
  userName,
  userNameSize = 'sm',
  userNameWeight = 600,
  message = '',
  messageSize = 'sm',
  messageWeight = 400,
  avatarSrc = '',
  width = 'sm',
  handleClick,
  createdAt,
  updatedAt,
}: PostCommentListItemPropsType) => {
  return (
    <Container maxWidth={width}>
      <Flex
        direction='row'
        alignItems='start'
        gap={0.75}
        p={0.75}
      >
        <AvatarContainer>
          <Avatar
            src={avatarSrc}
            size='sm'
            handleClick={handleClick}
          />
        </AvatarContainer>
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
            <Flex
              gap={0.25}
              alignItems='center'
            >
              <Text
                size='sm'
                weight={400}
                color='--adaptive400'
              >
                {updatedAt || createdAt}
              </Text>
              {updatedAt ? (
                <Text
                  size='xs'
                  weight={400}
                  color='--adaptive400'
                >
                  수정됨
                </Text>
              ) : null}
            </Flex>
          </Flex>
          <Text
            size={messageSize}
            weight={messageWeight}
          >
            {message}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default PostCommentListItem;
