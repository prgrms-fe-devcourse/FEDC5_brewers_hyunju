import styled from '@emotion/styled';
import Flex from '~/components/common/Flex';
import UserStateListItem from '~/components/userListItem/UserStateListItem';
import Text from '~/components/common/Text';
import { UserType } from '~/types/common';
import { useNavigate } from 'react-router-dom';
import { CONTAINER_SIZE } from '~/constants/design';
import Container from '../common/Container';
import { IconPlus } from '@tabler/icons-react';
import Tooltip from '../common/Tooltip';

export interface UserStateListTemplatePropsType {
  onlineUserList: UserType[];
}

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* position: sticky;
  top: 0;
  left: 0; */

  height: 100%;

  /* min-height: 28rem; */

  /* border: 1px solid var(--primaryColor); */

  /* background-color: var(--primaryColor); */

  box-sizing: border-box;

  /* overflow-x: hidden; */

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    flex-direction: row;
  }
`;

// const UserContainerDiv = styled.div`
//   display: flex;
//   flex-wrap: wrap;

//   width: 35rem;
//   height: 10rem;
//   margin: auto;

//   background-color: var(--adaptive100);

//   gap: 0.75rem;

//   overflow-y: scroll;

//   &::-webkit-scrollbar {
//     width: 0.25rem;
//   }

//   &::-webkit-scrollbar-thumb {
//     border-radius: 10px;
//     background: var(--primaryColor);
//   }

//   &::-webkit-scrollbar-track {
//     background: var(--red100);
//   }
// `;

const UserStateListTemplate = ({
  onlineUserList,
}: UserStateListTemplatePropsType) => {
  const navigate = useNavigate();

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
              }}
            />
          ))}
        </Flex1>
        <Tooltip
          content='전체 사용자 보기'
          eventType='hover'
          position='right'
          width={110}
        >
          <Flex
            alignItems='center'
            justifyContent='center'
            style={{
              padding: '0.75rem',
              backgroundColor: 'var(--adaptive100)',
            }}
          >
            <IconPlus
              size={'2rem'}
              color='var(--primaryColor)'
              onClick={() => navigate(`/search?type=users&q=%40all`)}
              style={{ cursor: 'pointer' }}
            />

            {/* <CircleButton
            variant='filled'
            size='md'
            color='--primaryColor'
            onClick={() => setMore(true)}
          ></CircleButton> */}
          </Flex>
        </Tooltip>

        {/* <Modal
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
        </Modal> */}
      </ContentDiv>
    </StyledContainer>
  );
};

export default UserStateListTemplate;

const StyledContainer = styled(Container)`
  padding: var(--padding-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);

  box-sizing: border-box;

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    padding: var(--padding-xl);
    overflow-x: auto;
  }
`;
