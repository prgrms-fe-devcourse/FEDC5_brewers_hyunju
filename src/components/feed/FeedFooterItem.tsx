import { CommentType, LikeType } from '~/types/common';
import LikeItem from './LikeItem';
import CommentItem from './CommentItem';

export interface FeedFooterItemPropTypes {
  postId: string;
  iconType: string;
  likes?: LikeType[];
  comments?: CommentType[] | string[];
}

const FeedFooterItem = ({
  postId,
  iconType,
  likes,
  comments,
}: FeedFooterItemPropTypes) => {
  return (
    <>
      {iconType === 'like' && (
        <LikeItem
          postId={postId}
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
