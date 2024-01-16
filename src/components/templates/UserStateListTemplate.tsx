import { useState } from 'react';

import styled from '@emotion/styled';

import Flex from '~/components/common/Flex';
import UserStateListItem from '~/components/userListItem/UserStateListItem';
import Text from '~/components/common/Text';
import Button from '~/components/common/Button';

import { UserType } from '~/types/common';
import Modal from '../common/Modal';
import { useNavigate } from 'react-router-dom';

export interface UserStateListTemplatePropsType {
  AllUsers: UserType[];
}

const ContentDiv = styled.div`
  overflow: auto;
  position: fixed;
  top: 10rem;
  left: 4rem;

  width: 12rem;
  height: 35.75rem;
  border: 1px solid var(--primaryColor);
  box-shadow: 3px 3px 5px var(--primaryColor);

  background-color: var(--adaptive100);

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

const UserContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 35rem;
  height: 28rem;
  margin: auto;

  background-color: var(--adaptive100);

  gap: 0.75rem;
  overflow-x: 'hidden';

  overflow-x: hidden;
  overflow-y: 'scroll';

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
  AllUsers,
}: UserStateListTemplatePropsType) => {
  const [more, setMore] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setMore(!more);
  };

  return (
    <ContentDiv>
      <Flex
        direction='column'
        alignItems='center'
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: 'var(--adaptive100)',
          flexGrow: 1,
          padding: '1rem',
        }}
      >
        <div
          style={{
            backgroundColor: 'var(--adaptive100)',
            width: '100%',
          }}
        >
          <Text
            size='md'
            color='--primaryColor'
          >
            온라인
          </Text>
        </div>
      </Flex>
      <Flex
        direction='column'
        gap={0.5}
        minHeight={28.5}
        style={{ backgroundColor: 'var(--adaptive100)' }}
      >
        <Flex
          direction='column'
          gap={0.5}
          minHeight={4}
          alignItems='center'
        ></Flex>
      </Flex>
      <Flex
        direction='column'
        alignItems='center'
        gap={0.5}
        style={{
          position: 'sticky',
          bottom: 0,
          padding: '0.75rem',
          backgroundColor: 'var(--adaptive100)',
        }}
      >
        <Button
          variant='filled'
          size='md'
          color='--primaryColor'
          style={{ width: '7.5rem', height: '2.75rem' }}
          onClick={() => setMore(true)}
        >
          전체 사용자
        </Button>
      </Flex>
      <Modal
        visible={more}
        handleClose={onClick}
      >
        <Modal.Header handleClose={() => setMore(false)}>
          <Text weight={600}>전체 사용자</Text>
        </Modal.Header>
        <Modal.Body>
          <UserContainerDiv>
            {AllUsers?.map(({ _id, fullName, image }) => (
              <div
                onClick={() => {
                  navigate(`/profile/${_id}`);
                  setMore(false);
                }}
                style={{ cursor: 'pointer' }}
                key={_id}
              >
                <UserStateListItem
                  fullName={fullName}
                  src={image}
                />
              </div>
            ))}
          </UserContainerDiv>
        </Modal.Body>
      </Modal>
    </ContentDiv>
  );
};

export default UserStateListTemplate;
