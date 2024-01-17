import styled from '@emotion/styled';
import { IconHeart, IconMessageCircle2 } from '@tabler/icons-react';
import { Divider, FeedItemContainer } from './feed/FeedListItem';
import Flex from './common/Flex';
import Skeleton from './common/Skeleton';

const FeedListItemSkeleton = () => {
  return (
    <StyledFeedItemContainer maxWidth='md'>
      <Flex
        justifyContent='space-between'
        alignItems='flex-start'
        gap={1}
      >
        <div style={{ flex: '1' }}>
          <Skeleton
            circle
            animation
            width={2.5}
          />
        </div>
        <Flex
          direction='column'
          style={{
            width: '43rem',
          }}
        >
          <Skeleton
            height={1.125}
            style={{ marginTop: '0.2rem', marginBottom: '0.2rem' }}
          />
          <Skeleton
            height={0.75}
            width={5}
            style={{ marginBottom: '1rem' }}
          />
          <Skeleton
            height={1}
            style={{ marginBottom: '0.5rem' }}
          />
          <Skeleton
            height={1}
            width={15}
          />

          <Divider></Divider>
          <Flex gap={1}>
            <Flex
              alignItems='center'
              gap={0.2}
            >
              <IconHeart
                width='1.4rem'
                height='1.4rem'
                color='var(--adaptive500)'
              />
              <Skeleton
                width={1.5}
                height={0.875}
                animation
              />
            </Flex>
            <Flex
              alignItems='center'
              gap={0.2}
            >
              <IconMessageCircle2
                width='1.4rem'
                height='1.4rem'
                color='var(--adaptive500)'
              />
              <Skeleton
                width={1.5}
                height={0.875}
                animation
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </StyledFeedItemContainer>
  );
};
const FeedListSkeleton = () => {
  return (
    <StyledUl>
      {Array.from(Array(5)).map((_, idx) => (
        <FeedListItemSkeleton key={idx} />
      ))}
    </StyledUl>
  );
};

export default FeedListSkeleton;

const StyledUl = styled.ul`
  flex-direction: column;
  align-items: center;

  padding: var(--padding-lg);
`;

const StyledFeedItemContainer = styled(FeedItemContainer)`
  cursor: default;
`;
