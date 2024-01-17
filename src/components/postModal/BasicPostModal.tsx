import { useCallback } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Modal from '~/components/common/Modal';
import Text from '~/components/common/Text';
import { postModalState } from '~/recoil/postModal/atoms';
import { basicPostOpenState } from '~/recoil/postModal/selectors';
import { userState } from '~/recoil/login/atoms';
import FeedListInput from '../feed/FeedListInput';
import { CustomPostContentType } from '~/types/common';
import useCreatePost from '~/hooks/api/post/useCreatePost';

const BasicPostModal = () => {
  const user = useRecoilValue(userState);
  const setPostModal = useSetRecoilState(postModalState);
  const isOpen = useRecoilValue(basicPostOpenState);
  const { status: createPostStatus, request: createPost } = useCreatePost();
  const handleClose = useCallback(() => {
    setPostModal({
      type: 'basic',
      isOpen: false,
      content: '',
      reviewForm: {},
      mogakForm: {},
    });
  }, [setPostModal]);
  const handleCreatePost = async (
    newPost: CustomPostContentType,
    file?: File
  ) => {
    try {
      if (!user) return; // 로그인 안되었을 경우
      await createPost(newPost, file);
      setPostModal((prev) => ({ ...prev, isOpen: false }));
    } catch (error) {
      console.error('post 전송 Error 발생');
    }
  };
  return (
    <Modal
      handleClose={handleClose}
      visible={isOpen}
    >
      <Modal.Page>
        <Modal.Header handleClose={handleClose}>
          <Text
            size='xl'
            weight={600}
          >
            포스트 작성하기
          </Text>
        </Modal.Header>
        <Modal.Body>
          {user && (
            <FeedListInput
              createStatus={createPostStatus}
              userId={user._id}
              profileImage={user.image}
              onHandleCreatePost={handleCreatePost}
            />
          )}

          {/* <Flex
            justifyContent='center'
            gap={1}
          >
            <div>
              <Avatar
                userId={user ? user._id : ''}
                size='sm'
                handleClick={() => {
                  navigation(`/profile/${user?._id}`);
                  setPostModal((prev) => ({
                    ...prev,
                    isOpen: false,
                  }));
                }}
              />
            </div>
            <ContentEditableDiv />
          </Flex> */}
        </Modal.Body>
        {/* <Modal.Footer>
          <Button
            variant='text'
            size='sm'
            color='--primaryColor'
          >
            <IconPhoto size={30} />
          </Button>
          <PostButton />
        </Modal.Footer> */}
      </Modal.Page>
    </Modal>
  );
};

export default BasicPostModal;
