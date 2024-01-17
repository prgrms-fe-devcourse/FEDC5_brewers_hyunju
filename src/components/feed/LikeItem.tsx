import React, { useState, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { IconHeart, IconHeartFilled } from '@tabler/icons-react';
import Text from '~/components/common/Text';
import Flex from '~/components/common/Flex';
import { userState } from '~/recoil/login/atoms';
import { LikeType } from '~/types/common';
import useCreateLike from '~/hooks/api/likes/useCreateLike';
import useDeleteLike from '~/hooks/api/likes/useDeleteLike';
import useDebounce from '~/hooks/useDebounce';
import useCreateNotification from '~/hooks/api/notification/useCreateNotification';
import { isLoginModalOpenState } from '~/recoil/loginModal/atoms';

interface LikeItemPropsType {
  postId: string;
  userId: string;
  likes: LikeType[];
}
const LikeItem = ({ postId, userId, likes }: LikeItemPropsType) => {
  const auth = useRecoilValue(userState);
  const [likeCount, setLikeCount] = useState(likes.length);
  const [isLikeFilled, setIsLikeFilled] = useState(
    likes && likes.some((like) => (like as LikeType).user === auth?._id)
  );
  const { request: createRequest, status: createStatus } = useCreateLike();
  const { request: deleteRequest, status: deleteStatus } = useDeleteLike();
  const { request: createNoti } = useCreateNotification();
  const setIsLoginModalOpen = useSetRecoilState(isLoginModalOpenState);
  const originalIsLikeFilled = useRef(isLikeFilled);

  useDebounce(
    () => {
      if (originalIsLikeFilled.current === isLikeFilled) return;
      if (deleteStatus === 'loading' || createStatus === 'loading') return;
      if (isLikeFilled) {
        // create api 연결
        createRequest(postId).then((createdLike) => {
          createdLike &&
            createNoti({
              notificationType: 'LIKE',
              notificationTypeId: createdLike._id,
              userId: userId,
              postId,
            });
        });
        originalIsLikeFilled.current = true;
      } else {
        // delete api 연결
        const deleteId = likes.find(
          (like) => (like as LikeType).user === auth?._id
        )?._id;
        deleteRequest({
          data: {
            id: deleteId,
          },
        });
        originalIsLikeFilled.current = false;
      }
    },
    500,
    [isLikeFilled]
  );
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!auth) {
      setIsLoginModalOpen(true);
      return;
    }
    e.stopPropagation();
    if (deleteStatus === 'loading' || createStatus === 'loading') return;
    if (isLikeFilled) {
      // delete api 연결
      setIsLikeFilled(false);
      setLikeCount((prev) => prev - 1);
    } else {
      // create api 연결
      setIsLikeFilled(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <StyledFlex
      alignItems='center'
      onClick={handleClick}
    >
      <IconWrapper
        isFilled={isLikeFilled}
        justifyContent='center'
        alignItems='center'
      >
        {!isLikeFilled ? (
          <IconHeart
            width='1.4rem'
            height='1.4rem'
          ></IconHeart>
        ) : (
          <IconHeartFilled
            width='1.4rem'
            height='1.4rem'
          ></IconHeartFilled>
        )}
      </IconWrapper>

      <Text
        size='sm'
        style={{ marginLeft: '0.2rem', color: 'var(--adaptive500)' }}
      >
        {'좋아요'}
      </Text>
      <Text
        size='sm'
        style={{ marginLeft: '0.25rem', color: 'var(--adaptive500)' }}
      >
        {likeCount}
      </Text>
    </StyledFlex>
  );
};

export default LikeItem;

const IconWrapper = styled(Flex)<{ isFilled: boolean }>`
  width: 1.8rem;
  height: 1.8rem;
  padding-top: 1px;
  padding-left: 0.7px;
  border-radius: 50%;

  background-color: ${(props) =>
    props.isFilled ? 'var(--red600)' : 'inherit'};

  transition: background-color 0.2s ease-in;
`;

const StyledFlex = styled(Flex)`
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: none;
    ${IconWrapper} {
      background-color: var(--red600);
    }
  }
`;
