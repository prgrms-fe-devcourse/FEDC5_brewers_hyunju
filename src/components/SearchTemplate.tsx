import React from 'react';
import styled from '@emotion/styled';
import Container from './common/Container';
import Text from './common/Text';
import SearchBar from './search/SearchBar';
import UserList from './search/UserList';
import Tabs from './common/Tabs';
import { UserListItemPropsType } from './search/UserListItem';
import FeedListItem, { FeedListItemPropsType } from './feed/FeedListItem';

export interface SearchTemplatePropsType {
  users?: UserListItemPropsType[];
  postList?: FeedListItemPropsType[];
}

const SearchTemplate = ({ users, postList }: SearchTemplatePropsType) => {
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
      >
        <Tabs.Header>
          <Tabs.Item
            text='통합 검색'
            id={0}
          />
          <Tabs.Item
            text='사용자 검색'
            id={1}
          />
        </Tabs.Header>
        <Tabs.Body id={0}>
          {postList &&
            postList.map((post) => (
              <FeedListItem
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
            ))}
        </Tabs.Body>
        <Tabs.Body id={1}>
          <UserList users={users} />
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
