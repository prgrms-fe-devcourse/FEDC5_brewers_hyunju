import styled from '@emotion/styled';

import Container from '../common/Container';
import Image from '../common/Image';
import Text from '../common/Text';
import Flex from '../common/Flex';

import ColorType from '~/types/design/color';

export interface UserStateListItemPropsType {
  src: string;
  fullName: string;
  isOnline: boolean;
}

interface BadgePropsType {
  color: ColorType;
}

const ImageBadgeDiv = styled.div`
  position: relative;
`;

const ProfileImage = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: end;
  overflow: hidden;
  position: relative;

  border-radius: 100%;
`;

const Badge = styled.div<BadgePropsType>`
  position: absolute;
  top: 1.75rem;
  left: 2rem;

  width: 0.75rem;
  height: 0.75rem;
  border-radius: 100%;

  background-color: ${({ color }) => `var(${color})`};
`;

const UserStateListItem = ({
  src,
  fullName,
  isOnline,
}: UserStateListItemPropsType) => {
  return (
    <Container
      maxWidth='sm'
      p={0.5}
      style={{
        backgroundColor: 'var(--white)',
        width: '10rem',
        borderBottom: '1px solid var(--primaryColor) ',
      }}
    >
      <Flex
        style={{ position: 'relative' }}
        gap={0.75}
        alignItems='center'
      >
        <ImageBadgeDiv>
          <ProfileImage>
            <Image
              width={2.5}
              height={2.5}
              alt={`${fullName} 프로필 사진`}
              src={src}
            />
          </ProfileImage>
          {isOnline ? (
            <Badge color={'--green500'} />
          ) : (
            <Badge color={'--red700'} />
          )}
        </ImageBadgeDiv>
        <Flex style={{ flex: 1, maxWidth: '108px' }}>
          <Text
            size={'sm'}
            style={{ wordWrap: 'break-word', maxWidth: '100%' }}
          >
            {fullName}
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default UserStateListItem;
