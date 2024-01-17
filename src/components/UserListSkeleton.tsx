import styled from '@emotion/styled';
import Skeleton from './common/Skeleton';
import ListItem from './search/ListItem';
import Flex from './common/Flex';

const UserListItemSkeleton = () => {
  return (
    <ListItem
      gap={1}
      justifyContent='space-between'
    >
      <Flex
        gap={1}
        alignItems='center'
      >
        <Skeleton
          width={2.5}
          circle={true}
          animation
        />
        <Skeleton
          animation
          height={1}
          width={15}
        />
      </Flex>

      <RoundSkeleton
        animation
        height={2}
        width={5.125}
      />
    </ListItem>
  );
};
const UserListSkeleton = () => {
  return (
    <StyledUl>
      {Array.from(Array(5)).map((_, idx) => {
        return <UserListItemSkeleton key={idx} />;
      })}
    </StyledUl>
  );
};

export default UserListSkeleton;

const StyledUl = styled.ul`
  flex-direction: column;
  align-items: center;

  padding: var(--padding-lg);
`;

const RoundSkeleton = styled(Skeleton)`
  justify-self: flex-end;
  border-radius: var(--radius-lg);
`;
