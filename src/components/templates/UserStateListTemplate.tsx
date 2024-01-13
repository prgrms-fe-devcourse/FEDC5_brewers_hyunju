import { useState } from 'react';

import styled from '@emotion/styled';

import Container from '~/components/common/Container';
import Flex from '~/components/common/Flex';
import UserStateListItem from '~/components/userListItem/UserStateListItem';
import Text from '~/components/common/Text';
import Button from '~/components/common/Button';
import CircleLoading from '~/components/loading/CircleLoading';

import { UserType } from '~/types/common';

export interface UserStateListTemplatePropsType {
  onlineUserList: UserType[];
  offlineUserList: UserType[];
  status: 'stale' | 'loading' | 'error' | 'success';
}

const ContentDiv = styled.div`
  overflow: auto;

  width: 12rem;
  height: 35.75rem;
  padding: 1rem;
  border: 1px solid var(--primaryColor);
  box-shadow: 3px 3px 5px var(--primaryColor);

  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: var(--primaryColor);
  }

  &::-webkit-scrollbar-track {
    background: var(--red100);
  }
`;

const UserStateListTemplate = ({
  onlineUserList,
  offlineUserList,
  status,
}: UserStateListTemplatePropsType) => {
  const [more, setMore] = useState(false);

  const onClick = () => {
    setMore(!more);
  };

  return (
    <Container maxWidth='sm'>
      <ContentDiv>
        <Flex
          direction='column'
          gap={1}
        >
          <Flex
            direction='column'
            gap={0.5}
          >
            <Text
              size='sm'
              style={{ backgroundColor: 'var(--green100)' }}
            >
              온라인
            </Text>
            <Flex
              direction='column'
              gap={0.25}
            >
              {status === 'loading' ? (
                <CircleLoading size={1} />
              ) : (
                onlineUserList?.map((user) => (
                  <UserStateListItem
                    key={user._id}
                    fullName={user.fullName}
                    src={user.image}
                    isOnline={user.isOnline}
                  />
                ))
              )}
            </Flex>
          </Flex>
          <Flex
            direction='column'
            gap={0.5}
          >
            <Text
              size='sm'
              style={{ backgroundColor: 'var(--red100)' }}
            >
              오프라인
            </Text>
            <Button
              variant={'text'}
              size={'sm'}
              onClick={onClick}
              color={'--adaptive400'}
              style={{ padding: 0 }}
            >
              {!more ? '더보기' : '닫기'}
            </Button>
            {more && (
              <Flex
                direction='column'
                gap={0.25}
              >
                {status === 'loading' ? (
                  <CircleLoading size={1} />
                ) : (
                  offlineUserList?.map((user) => (
                    <UserStateListItem
                      key={user._id}
                      fullName={user.fullName}
                      src={user.image}
                      isOnline={user.isOnline}
                    />
                  ))
                )}
              </Flex>
            )}
          </Flex>
        </Flex>
      </ContentDiv>
    </Container>
  );
};

export default UserStateListTemplate;
