import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Container from './common/Container';
import Text from './common/Text';
import SearchBar from './search/SearchBar';
import UserList from './search/UserList';
import Tabs from './common/Tabs';
import { UserListItemPropsType } from './search/UserListItem';
import FeedListItem, { FeedListItemPropsType } from './feed/FeedListItem';
import FeedListSkeleton from './FeedListSkeleton';
import UserListSkeleton from './UserListSkeleton';

type StatusType = 'stale' | 'loading' | 'error' | 'success';
export interface SearchTemplatePropsType {
  users?: UserListItemPropsType[];
  postList?: Omit<FeedListItemPropsType, 'onFeedClick' | 'onUserClick'>[];
  allStatus: StatusType;
  userStatus: StatusType;
}

const SearchTemplate = ({
  users,
  postList,
  allStatus,
  userStatus,
}: SearchTemplatePropsType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <SearchContainer maxWidth='md'>
      <Text
        size='3xl'
        weight={800}
      >
        검색
      </Text>
      <SearchBar />
      <Tabs
        isFull={false}
        gap={2}
        fontSize='md'
        fontWeight={600}
        defaultId={searchParams.get('type') === 'all' ? 0 : 1}
      >
        <Tabs.Header>
          <Tabs.Item
            text='통합 검색'
            id={0}
            handleClick={() => {
              setSearchParams((prev) => {
                prev.set('type', 'all');
                return prev;
              });
            }}
          />
          <Tabs.Item
            text='사용자 검색'
            id={1}
            handleClick={() => {
              setSearchParams((prev) => {
                prev.set('type', 'users');
                return prev;
              });
            }}
          />
        </Tabs.Header>
        <Tabs.Body id={0}>
          {allStatus === 'success' ? (
            postList && postList.length ? (
              postList.map((post) => (
                <FeedListItem
                  key={post.id}
                  id={post.id}
                  userId={post.userId}
                  profileImage={post.profileImage}
                  userName={post.userName}
                  createdAt={post.createdAt}
                  updatedAt={post.updatedAt}
                  content={post.content}
                  likesCount={post.likesCount}
                  commentsCount={post.commentsCount}
                  onFeedClick={() => {}}
                  onUserClick={() => {}}
                  imageUrl={post.imageUrl}
                />
              ))
            ) : (
              <Text>검색 결과가 없습니다</Text>
            )
          ) : allStatus === 'loading' ? (
            <FeedListSkeleton />
          ) : (
            allStatus === 'error' && <Text>Error</Text>
          )}
        </Tabs.Body>
        <Tabs.Body id={1}>
          {userStatus === 'success' ? (
            <UserList users={users} />
          ) : userStatus === 'loading' ? (
            <UserListSkeleton />
          ) : (
            userStatus === 'error' && <Text>Error</Text>
          )}
        </Tabs.Body>
      </Tabs>
    </SearchContainer>
  );
};

export default SearchTemplate;

const SearchContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;
  gap: 1.5rem;
`;
