import { CommentType, LikeType } from '~/types/common';
import LikeItem from './LikeItem';
import CommentItem from './CommentItem';

export interface FeedFooterItemPropTypes {
  postId: string;
  userId: string;
  iconType: string;
  likes?: LikeType[];
  comments?: CommentType[] | string[];
}

const FeedFooterItem = ({
  postId,
  userId,
  iconType,
  likes,
  comments,
}: FeedFooterItemPropTypes) => {
  return (
    <>
      {iconType === 'like' && (
        <LikeItem
          postId={postId}
          userId={userId}
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
