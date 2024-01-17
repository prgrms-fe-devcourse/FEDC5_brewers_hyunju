import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import Button from './common/Button';
import { isPostEmptyState } from '~/recoil/postModal/selectors';
import { postModalState } from '~/recoil/postModal/atoms';
import useCreatePost from '~/hooks/api/post/useCreatePost';

const PostButton = () => {
  const setPostModal = useSetRecoilState(postModalState);
  // const content = useRecoilValue(postModalContentState);
  const isEmpty = useRecoilValue(isPostEmptyState);
  const state = useRecoilValue(postModalState);
  const { status, request } = useCreatePost();
  return (
    <RoundButton
      disabled={isEmpty || status === 'loading' ? true : false}
      variant='filled'
      color='--primaryColor'
      size='md'
      onClick={() => {
        switch (state.type) {
          case 'basic':
            request({
              type: 'common',
              title: '',
              workingSpot: 'cafe',
              body: {
                text: state.content,
              },
            });
            break;
          case 'mogakco':
            request({
              type: 'mogak',
              title: '',
              workingSpot: 'cafe',
              body: {
                text: state.content,
                date: state.mogakForm.date!,
                startTime: state.mogakForm.startTime!,
                endTime: state.mogakForm.endTime!,
                placeName: state.mogakForm.placeName!,
                address: state.mogakForm.address!,
                maxCount: state.mogakForm.maxCount!,
              },
            });
            break;
          case 'review':
            request({
              type: 'review',
              title: '',
              workingSpot: 'cafe',
              body: {
                text: state.content,
                placeName: state.reviewForm.placeName!,
                address: state.reviewForm.address!,
                ...state.reviewForm,
              },
            });
            break;
        }
        setPostModal({
          type: 'basic',
          isOpen: false,
          content: '',
          reviewForm: {},
          mogakForm: {},
        });
      }}
    >
      작성
    </RoundButton>
  );
};

export default PostButton;

const RoundButton = styled(Button)`
  border-radius: 40px;
`;
