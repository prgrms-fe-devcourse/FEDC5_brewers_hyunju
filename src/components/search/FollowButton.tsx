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
  const handleClick = useCallback(() => {
    console.log('click');
    if (isFollowing) {
      // TODO: unfollow api
    } else {
      // TODO: follow api
    }
  }, [isFollowing]);
  return (
    <RoundButton
      size='md'
      variant={isFollowing ? 'outlined' : 'filled'}
      color='--adaptive950'
      p={1}
      onMouseEnter={() => {
        if (!isFollowing) return;
        setHover(true);
      }}
      onMouseOut={() => {
        if (!isFollowing) return;
        setHover(false);
      }}
      hoverColor={isFollowing && hover ? '--red600' : '--adaptive950'}
      onClick={handleClick}
    >
      <Text
        size='md'
        weight={600}
        color={
          isFollowing ? (hover ? '--red600' : '--adaptive950') : '--adaptive50'
        }
        style={{ pointerEvents: 'none' }}
      >
        {isFollowing ? (hover ? 'Unfollow' : 'Following') : 'Follow'}
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

  border-color: ${props.hoverColor ? `var(${props.hoverColor})` : undefined}
`
);
