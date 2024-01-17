import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import SearchTemplate from '~/components/templates/SearchTemplate';
import useSearchAll from '~/hooks/api/search/useSearchAll';
import useSearchUsers from '~/hooks/api/search/useSearchUsers';
import { userState } from '~/recoil/login/atoms';
import {
  LikeType,
  PostSimpleType,
  UserSimpleType,
  WorkingSpotType,
} from '~/types/common';

export interface UserSearchData {
  userImage: string;
  userId: string;
  userName: string;
  isFollowing: boolean;
  followId?: string;
  [prop: string]: unknown;
}
export interface PostSearchData {
  id: string;
  userId: string;
  profileImage: string;
  userName: string;
  createdAt: string;
  updatedAt?: string;
  content: string;
  workingSpot: WorkingSpotType;
  imageUrl?: string;
  likes: LikeType[];
  comments: string[];
  [prop: string]: unknown;
}
const parseSearchData = (
  searchData: (PostSimpleType | UserSimpleType)[],
  id: string | undefined
) => {
  const users: UserSearchData[] = [];
  const postList: PostSearchData[] = [];
  if (searchData) {
    searchData.forEach((item) => {
      if ((item as UserSimpleType).role) {
        const followData = (item as UserSimpleType).followers.find(
          (follow) => follow.follower === id
        );

        users.push({
          userImage: (item as UserSimpleType).image,
          userId: item._id,
          userName: (item as UserSimpleType).fullName,
          isFollowing: followData !== undefined ? true : false,
          followId: followData ? followData._id : undefined,
        });
      } else if ((item as PostSimpleType).title) {
        const parsedContent = JSON.parse((item as PostSimpleType).title);
        // const response = await axiosInstance.get(
        //   `/users/${(item as PostSimpleType).author}`
        // );
        // console.log(response);
        postList.push({
          id: (item as PostSimpleType)._id,
          userId: (item as PostSimpleType).author,
          profileImage: '',
          userName: '',
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          content: parsedContent.body.text,
          workingSpot: parsedContent.workingSpot,
          imageUrl: item.image,
          likes: (item as PostSimpleType).likes,
          comments: item.comments,
        });
      }
    });
  }
  return { users, postList };
};

const SearchPage = () => {
  const auth = useRecoilValue(userState);
  const { status: searchAllStatus, data: searchAllData } = useSearchAll();
  const { status: searchUserStatus, data: searchUserData } = useSearchUsers();
  // const { users, postList } = parseSearchData(searchData);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('type')) {
      setSearchParams({ type: 'all' });
    }
  }, []);

  // useEffect(() => {}, [searchParams]);

  return (
    <SearchTemplate
      allStatus={searchAllStatus}
      userStatus={searchUserStatus}
      users={parseSearchData(searchUserData, auth?._id).users}
      all={parseSearchData(searchAllData, auth?._id)}
    />
  );
};

export default SearchPage;
