import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import Image from '~/components/common/Image';
import Avatar from '~/components/common/Avatar';
import FeedFooterItem from '~/components/feed/FeedFooterItem';
import DropDown from '~/components/dropDown/DropDown';

// import PostCommentListItem from '../postComment/PostCommentListItem';

import { handleDate } from '~/utils/handleDate';
import { CommentType, LikeType, UserType } from '~/types/common';

export interface PostPropsType {
  id: string;
  key: string;
  author: UserType;
  createdAt: string;
  updatedAt?: string;
  content: string;
  imageUrl?: string;
  likes: LikeType[];
  comments: CommentType[];
  onDropDownClick: (action: string) => void;
}

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 1rem 0;

  background-color: var(--adaptive400);
`;

export const PostContainer = styled(Container)`
  flex-shrink: 0;

  padding: 1rem 1.5rem;
  border: 1px solid var(--adaptive200);

  /* border-radius: 0.75rem; */

  /* box-shadow: 0 4px 4px 0 var(--adaptiveOpacity100); */

  background-color: var(-adaptive50);

  box-sizing: border-box;

  /* transition: 0.2s background-color ease-in; */

  /* &:hover {
    background-color: var(--adaptive200);
  } */
`;

const Post = ({
  id,
  author,
  createdAt,
  // updatedAt,
  content,
  imageUrl,
  likes,
  comments,
  onDropDownClick,
  // onUserClick,
}: PostPropsType) => {
  // 피드 클릭 시
  const handleDropDownClick = (action: string) => {
    if (onDropDownClick) {
      onDropDownClick(action);
    }
  };

  // 사용자 이미지 클릭 시
  // const handleUserClick = () => {
  //   if (onUserClick) {
  //     onUserClick();
  //   }
  // };

  return (
    <PostContainer maxWidth='md'>
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
        gap={1}
      >
        <div>
          <Avatar
            userId={author._id}
            src={author.image}
            size='sm'
            alt='user image'
          ></Avatar>
        </div>
        <Flex
          direction='column'
          style={{
            width: '44rem',
          }}
        >
          <Flex justifyContent='space-between'>
            <div>
              <Text
                size='lg'
                weight={600}
                style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}
              >
                {author.fullName}
              </Text>
              <Text
                size='xs'
                color='--adaptive500'
                style={{ marginBottom: '1rem' }}
              >
                {/* {isUpdated(createdAt, updatedAt)
                  ? `${handleDate(updatedAt)} · 수정됨`
                  : handleDate(createdAt)} */}
                {handleDate(createdAt)}
              </Text>
            </div>
            <DropDown
              list={[
                { title: '수정하기', action: 'put' },
                { title: '삭제하기', action: 'delete' },
              ]}
              handleClick={(action: string) => {
                if (action === 'put') {
                  handleDropDownClick(action);
                } else {
                  handleDropDownClick(action);
                }
                // 로직 추가
              }}
            ></DropDown>
          </Flex>

          <Text style={{ marginBottom: '1rem', lineHeight: '1.4' }}>
            {content}
          </Text>
          {imageUrl && (
            <Image
              src={imageUrl}
              width='100%'
              height='auto'
              mode='contain'
              alt='content image'
            ></Image>
          )}
          <Divider></Divider>
          <Flex gap={1.5}>
            <FeedFooterItem
              postId={id}
              iconType={'like'}
              likes={likes}
            ></FeedFooterItem>
            <FeedFooterItem
              postId={id}
              iconType={'comment'}
              comments={comments}
            ></FeedFooterItem>
          </Flex>
        </Flex>
      </Flex>
    </PostContainer>
  );
};

export default Post;
