import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import SearchTemplate from '~/components/SearchTemplate';
import useSearchAll from '~/hooks/api/search/useSearchAll';
import useSearchUsers from '~/hooks/api/search/useSearchUsers';
import { userState } from '~/recoil/login/atoms';
import { PostType, UserType } from '~/types/common';

export interface UserSearchData {
  userImage: string;
  userId: string;
  userName: string;
  isFollowing: boolean;
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
  imageUrl?: string;
  likesCount: number;
  commentsCount: number;
  [prop: string]: unknown;
}
const parseSearchData = (
  searchData: (PostType | UserType)[],
  id: string | undefined
) => {
  const users: UserSearchData[] = [];
  const postList: PostSearchData[] = [];
  if (searchData) {
    searchData.forEach((item) => {
      //console.log(item);
      if ((item as UserType).role) {
        users.push({
          userImage: (item as UserType).image,
          userId: item._id,
          userName: (item as UserType).fullName,
          isFollowing: id ? (item as UserType).followers.includes(id) : false,
        });
      } else if ((item as PostType).title) {
        // const response = await axiosInstance.get(
        //   `/users/${(item as PostType).author}`
        // );
        // console.log(response);
        postList.push({
          id: (item as PostType)._id,
          userId: (item as PostType).author,
          profileImage: '',
          userName: '',
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          content: JSON.parse((item as PostType).title).body.text,
          imageUrl: item.image,
          likesCount: item.likes.length,
          commentsCount: item.comments.length,
        });
      }
    });
  }
  return { users, postList };
};

const SearchPage = () => {
  const loginData = useRecoilValue(userState);
  const { status: searchAllStatus, data: searchAllData } = useSearchAll();
  const { status: searchUserStatus, data: searchUserData } = useSearchUsers();
  // const { users, postList } = parseSearchData(searchData);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('type')) {
      setSearchParams({ type: 'all' });
    }
  }, []);

  return (
    <SearchTemplate
      allStatus={searchAllStatus}
      userStatus={searchUserStatus}
      users={parseSearchData(searchUserData, loginData?._id).users}
      all={parseSearchData(searchAllData, loginData?._id)}
    />
  );
};

export default SearchPage;
