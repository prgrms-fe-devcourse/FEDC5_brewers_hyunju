import { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Button from '~/components/common/Button';
import Text from '~/components/common/Text';
import ColorType from '~/types/design/color';
import useCreateFollow from '~/hooks/api/follow/useCreateFollow';
import useDeleteFollow from '~/hooks/api/follow/useDeleteFollow';
import { css } from '@emotion/react';

export interface FollowButtonPropsType {
  userId: string;
  followId?: string;
  isFollowing: boolean;
}
const FollowButton = ({
  userId,
  followId,
  isFollowing,
}: FollowButtonPropsType) => {
  const { status: createFollowStatus, request: createFollow } =
    useCreateFollow();
  const { status: deleteFollowStatus, request: deleteFollow } =
    useDeleteFollow(followId);
  const [hover, setHover] = useState(false);
  const [isFollow, setIsFollow] = useState(isFollowing);

  const handleClick = useCallback(async () => {
    if (createFollowStatus === 'loading' || deleteFollowStatus === 'loading')
      return;
    if (isFollow) {
      setIsFollow(false);
      // TODO: modal => unfollow 하겠습니까? [확인] [취소]
      // TODO: unfollow api
      if (followId === undefined) return;
      await deleteFollow();
      //actions.searchUserRequest();
    } else {
      setIsFollow(true);
      // TODO: follow api
      await createFollow(userId);
      //actions.searchUserRequest();
    }
  }, [
    createFollow,
    createFollowStatus,
    deleteFollow,
    deleteFollowStatus,
    followId,
    isFollow,
    userId,
  ]);
  return (
    <RoundButton
      size='md'
      variant={isFollow ? 'outlined' : 'filled'}
      color='--adaptive950'
      p={1}
      onMouseEnter={() => {
        if (!isFollow) return;
        setHover(true);
      }}
      onMouseOut={() => {
        if (!isFollow) return;
        setHover(false);
      }}
      hoverColor={isFollow && hover ? '--red600' : '--adaptive950'}
      onClick={handleClick}
    >
      <Text
        size='md'
        weight={600}
        color={
          isFollow ? (hover ? '--red600' : '--adaptive950') : '--adaptive50'
        }
        style={{ pointerEvents: 'none' }}
      >
        {isFollow ? (hover ? 'Unfollow' : 'Following') : 'Follow'}
      </Text>
    </RoundButton>
  );
};

export default FollowButton;
interface RoundButtonPropsType {
  hoverColor?: ColorType;
}
const RoundButton = styled(Button)(
  (props: RoundButtonPropsType) => css`
    height: 2rem;
    border-radius: var(--radius-lg);

    color: var(--adaptive50);

    border-color: ${props.hoverColor ? `var(${props.hoverColor})` : undefined};
  `
);
