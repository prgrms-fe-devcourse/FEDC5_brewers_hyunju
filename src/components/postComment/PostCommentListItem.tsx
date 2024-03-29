import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Avatar from '../common/Avatar';
import { FontSizeType, FontWeightType } from '~/types/design/font';
import ContainerSizeType from '~/types/design/container';

import { handleDate, isUpdated } from '~/utils/handleDate';

import Button from '../common/Button';

export interface PostCommentListItemPropsType {
  id: string;
  isMine: boolean;
  userId: string;
  userName: string;
  userNameSize?: FontSizeType;
  userNameWeight?: FontWeightType;
  message: string;
  messageSize?: FontSizeType;
  messageWeight?: FontWeightType;
  avatarSrc?: string;
  width?: ContainerSizeType;
  // handleClick: () => void;
  createdAt: string;
  updatedAt: string;
  onDeleteComment: (commentId: string) => void;
}

const AvatarContainer = styled.div`
  flex-shrink: 0;
`;

const PostCommentListItem = ({
  id,
  isMine,
  userId,
  userName,
  userNameSize = 'sm',
  userNameWeight = 600,
  message = '',
  messageSize = 'sm',
  messageWeight = 400,
  avatarSrc = '',
  width = 'md',
  // handleClick,
  createdAt,
  updatedAt,
  onDeleteComment,
}: PostCommentListItemPropsType) => {
  return (
    <Container
      maxWidth={width}
      style={{
        padding: 'var(--padding-lg)',
        boxSizing: 'border-box',
      }}
    >
      <Flex
        direction='row'
        justifyContent='space-between'
        alignItems='start'
        gap={0.75}
        // p={0.75}
        style={{ width: '100%' }}
      >
        {' '}
        <Flex>
          <AvatarContainer style={{ marginRight: '1rem' }}>
            <Avatar
              userId={userId}
              src={avatarSrc}
              size='sm'
              // handleClick={handleClick}
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
                  {handleDate(updatedAt) || handleDate(createdAt)}
                </Text>

                {isUpdated(createdAt, updatedAt) ? (
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
              style={{ lineHeight: '1.4' }}
            >
              {message}
            </Text>
          </Flex>
        </Flex>
        {isMine && (
          <Button
            variant='outlined'
            size='md'
            color='--primaryColor'
            onClick={() => onDeleteComment(id)}
            style={{
              height: '2rem',
              width: '4.5rem',
              marginLeft: 'auto',
              alignSelf: 'center',
              marginRight: '0',
              flexShrink: '0',
            }}
          >
            삭제
          </Button>
        )}
      </Flex>
    </Container>
  );
};

export default PostCommentListItem;
