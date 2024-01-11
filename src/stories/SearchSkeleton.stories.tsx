import FeedListSkeleton from '~/components/FeedListSkeleton';
import UserListSkeleton from '~/components/UserListSkeleton';

export default {
  title: 'Template/SearchSkeleton',
  component: [FeedListSkeleton, UserListSkeleton],
};

export const FeedSkeleton = () => {
  return <FeedListSkeleton />;
};

export const UserSkeleton = () => {
  return <UserListSkeleton />;
};
