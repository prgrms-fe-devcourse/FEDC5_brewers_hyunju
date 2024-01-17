import { useState } from 'react';

import styled from '@emotion/styled';

import Flex from '~/components/common/Flex';
import UserStateListItem from '~/components/userListItem/UserStateListItem';
import Text from '~/components/common/Text';
import { UserType } from '~/types/common';
import Modal from '../common/Modal';
import { useNavigate } from 'react-router-dom';
import { CONTAINER_SIZE } from '~/constants/design';
import Container from '../common/Container';
import { IconPlus } from '@tabler/icons-react';

export interface UserStateListTemplatePropsType {
  onlineUserList: UserType[];
  allUsers: UserType[];
}

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  /* position: sticky;
  top: 0;
  left: 0; */

  height: 100%;

  /* min-height: 28rem; */

  /* border: 1px solid var(--primaryColor); */

  /* box-shadow: 3px 3px 5px var(--primaryColor); */

  /* background-color: var(--primaryColor); */

  box-sizing: border-box;

  overflow-x: hidden;

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    flex-direction: row;
  }
`;

const UserContainerDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 35rem;
  height: 10rem;
  margin: auto;
  border: solid 1px var(--green500);

  background-color: var(--adaptive100);

  gap: 0.75rem;

  overflow-y: scroll;
`;

const UserStateListTemplate = ({
  onlineUserList,
  allUsers,
}: UserStateListTemplatePropsType) => {
  const [more, setMore] = useState(false);
  const navigate = useNavigate();

  const onClick = () => {
    setMore(!more);
  };

  const Flex1 = styled(Flex)`
    flex-direction: column;

    min-height: 30rem;

    @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
      flex-direction: row;
      min-height: 0;
    }

    box-sizing: border-box;
  `;

  return (
    <StyledContainer maxWidth='md'>
      <div
        style={{
          width: '100%',
          marginBottom: '1rem',
          padding: '0',
          boxSizing: 'border-box',
        }}
      >
        <Text
          size='md'
          weight={600}
          color='--primaryColor'
        >
          온라인
        </Text>
      </div>
      <ContentDiv>
        <Flex1
          // minHeight={4}
          alignItems='center'
        >
          {onlineUserList?.map(({ _id, fullName, image }) => (
            <UserStateListItem
              userId={_id}
              fullName={fullName}
              src={image}
              handleClick={() => {
                navigate(`/profile/${_id}`);
                setMore(false);
              }}
            />
          ))}
        </Flex1>
        <Flex
          alignItems='center'
          justifyContent='center'
          style={{
            padding: 'var(--padding-md)',
            backgroundColor: 'var(--adaptive100)',
          }}
        >
          <IconPlus
            size={'2rem'}
            color='var(--primaryColor)'
            onClick={() => setMore(true)}
            style={{ cursor: 'pointer' }}
          />

          {/* <CircleButton
            variant='filled'
            size='md'
            color='--primaryColor'
            onClick={() => setMore(true)}
          ></CircleButton> */}
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
              {allUsers?.map(({ _id, fullName, image }) => (
                <UserStateListItem
                  userId={_id}
                  fullName={fullName}
                  src={image}
                  handleClick={() => {
                    navigate(`/profile/${_id}`);
                    setMore(false);
                  }}
                />
              ))}
            </UserContainerDiv>
          </Modal.Body>
        </Modal>
      </ContentDiv>
    </StyledContainer>
  );
};

export default UserStateListTemplate;

const StyledContainer = styled(Container)`
  padding: var(--padding-lg);
  border-radius: var(--radius-lg);
  box-shadow: 0 0 1.5rem var(--adaptiveOpacity50);

  box-sizing: border-box;

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    padding: var(--padding-xl);
    overflow-x: auto;
  }
`;
