import styled from '@emotion/styled';

import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import Avatar from '../common/Avatar';
import { CONTAINER_SIZE } from '~/constants/design';
import Box from '~/components/common/Box';

export interface UserStateListItemPropsType {
  userId: string;
  src: string;
  fullName: string;
  handleClick: () => void;
}

const ImageBadgeDiv = styled.div`
  position: relative;
`;

const UserStateListItem = ({
  userId,
  src,
  fullName,
  handleClick,
}: UserStateListItemPropsType) => {
  return (
    <ReactiveBox>
      <ReactiveFlex
        style={{ position: 'relative' }}
        gap={0.75}
        alignItems='center'
        justifyContent='center'
      >
        <ImageBadgeDiv>
          <Avatar
            src={src}
            userId={userId}
            size='sm'
            handleClick={handleClick}
          />
        </ImageBadgeDiv>
        <TextFlex style={{ flex: 1, maxWidth: '108px' }}>
          <Text
            size={'sm'}
            weight={600}
            style={{ wordWrap: 'break-word', maxWidth: '100%' }}
          >
            {fullName}
          </Text>
        </TextFlex>
      </ReactiveFlex>
    </ReactiveBox>
  );
};

export default UserStateListItem;

const ReactiveBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: var(--padding-lg);

  /* border: solid 1px var(--blue500); */
  border-bottom: 1px solid var(--primaryColor);

  /* background-color: var(--adaptive100); */
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: var(--adaptive400);
  }

  @media screen and (width <= ${CONTAINER_SIZE['xl']}) {
    width: min-content;
    height: min-content;
    padding: 0.5rem;
  }

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    width: 7rem;
    height: 5rem;
    padding: var(--padding-sm);
  }
`;
const ReactiveFlex = styled(Flex)`
  flex-direction: row;
  width: 100%;

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    flex-direction: column;
  }
`;

const TextFlex = styled(Flex)`
  display: block;

  @media screen and (width <= ${CONTAINER_SIZE['xl']}) {
    display: none;
  }

  @media screen and (width <= ${CONTAINER_SIZE['lg']}) {
    display: block;
  }
`;
