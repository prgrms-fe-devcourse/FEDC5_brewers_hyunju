import styled from '@emotion/styled';

import Container from '~/components/common/Container';
import Image from '~/components/common/Image';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';

export interface UserStateListItemPropsType {
  src: string;
  fullName: string;
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

  border: 0.125rem solid var(--adaptive600);
  border-radius: 50%;

  cursor: pointer;
  transition: border-color 0.2s ease-out;
`;

const UserStateListItem = ({ src, fullName }: UserStateListItemPropsType) => {
  return (
    <Container
      maxWidth='sm'
      p={0.5}
      style={{
        backgroundColor: 'var(--adaptive100)',
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
