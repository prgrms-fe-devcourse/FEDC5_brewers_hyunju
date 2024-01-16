import { CommentType, LikeType, UserType } from '~/types/common';
import LikeItem from './LikeItem';
import CommentItem from './CommentItem';

export interface FeedFooterItemPropTypes {
  postId: string;
  author: UserType;
  iconType: string;
  likes?: LikeType[];
  comments?: CommentType[] | string[];
}

const FeedFooterItem = ({
  postId,
  author,
  iconType,
  likes,
  comments,
}: FeedFooterItemPropTypes) => {
  return (
    <>
      {iconType === 'like' && (
        <LikeItem
          postId={postId}
          author={author}
          likes={likes || []}
        />
      )}
      {iconType === 'comment' && (
        <CommentItem
          handleClick={() => console.log('댓글')}
          comments={comments || []}
        />
      )}
    </>
  );
};

export default FeedFooterItem;
