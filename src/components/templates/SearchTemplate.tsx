import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Container from '~/components/common/Container';
import Text from '~/components/common/Text';
import SearchBar from '~/components/search/SearchBar';
import UserList from '~/components/search/UserList';
import Tabs from '~/components/common/Tabs';
import FeedListItem from '~/components/feed/FeedListItem';
import { PostSearchData, UserSearchData } from '~/pages/SearchPage';
import Flex from '~/components/common/Flex';
import UsersLink from '~/components/UsersLink';

type StatusType = 'stale' | 'loading' | 'error' | 'success';
export interface SearchTemplatePropsType {
  users?: UserSearchData[];
  all?: {
    users: UserSearchData[];
    postList: PostSearchData[];
  };
  allStatus: StatusType;
  userStatus: StatusType;
}

const SearchTemplate = ({
  users,
  all,
  allStatus,
  userStatus,
}: SearchTemplatePropsType) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
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
        defaultId={
          !searchParams.get('type') || searchParams.get('type') === 'all'
            ? 0
            : 1
        }
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
          {allStatus === 'success' && all && (
            <>
              <WrapperFlex direction='column'>
                <Box>
                  <Text
                    size='xl'
                    weight={800}
                  >
                    사용자
                  </Text>
                </Box>

                <UserList users={all.users.slice(0, 3)} />
                <UsersLink />
              </WrapperFlex>
              <WrapperFlex direction='column'>
                <Box>
                  <Text
                    size='xl'
                    weight={800}
                  >
                    포스트
                  </Text>
                </Box>
                {all.postList.length ? (
                  all.postList.map((post) => (
                    <FeedListItem
                      workingSpot={post.workingSpot}
                      key={post.id}
                      id={post.id}
                      userId={post.userId}
                      profileImage={post.profileImage}
                      userName={post.userName}
                      createdAt={post.createdAt}
                      updatedAt={post.updatedAt}
                      content={post.content}
                      likes={post.likes}
                      comments={post.comments}
                      onFeedClick={() => {
                        navigate(`/post/${post.id}`);
                      }}
                      imageUrl={post.imageUrl}
                    />
                  ))
                ) : (
                  <Box>
                    <Text
                      size='lg'
                      weight={600}
                    >
                      검색 결과가 없습니다
                    </Text>
                  </Box>
                )}
              </WrapperFlex>
            </>
          )}
          {allStatus === 'error' && <Text>Error</Text>}
        </Tabs.Body>
        <Tabs.Body id={1}>
          {userStatus === 'success' && <UserList users={users} />}
          {userStatus === 'error' && <Text>Error</Text>}
        </Tabs.Body>
      </Tabs>
    </SearchContainer>
  );
};

export default SearchTemplate;

const WrapperFlex = styled(Flex)`
  border: 1px solid var(--adaptive200);
`;

const Box = styled.div`
  padding: var(--padding-lg);
`;
const SearchContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  padding: var(--padding-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;
  gap: 1.5rem;
`;
