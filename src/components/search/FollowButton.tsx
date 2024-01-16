import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import Button from '~/components/common/Button';
import Text from '~/components/common/Text';
import ColorType from '~/types/design/color';

export interface FollowButtonPropsType {
  isFollowing: boolean;
}
const FollowButton = ({ isFollowing }: FollowButtonPropsType) => {
  const [hover, setHover] = useState(false);
  const [isFollow, setIsFollow] = useState(isFollowing);
  const handleClick = useCallback(() => {
    if (isFollow) {
      setIsFollow(false);
      // TODO: modal => unfollow 하겠습니까? [확인] [취소]
      // TODO: unfollow api
    } else {
      setIsFollow(true);
      // TODO: follow api
    }
  }, [isFollow]);
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
  (props: RoundButtonPropsType) => `
  height: 2rem;
  border-radius: 1.25rem;
  
  color: var(--adaptive50);

  border-color: ${props.hoverColor ? `var(${props.hoverColor})` : undefined};
`
);
