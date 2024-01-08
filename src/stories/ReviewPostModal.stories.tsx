import { useSetRecoilState } from 'recoil';
import { postModalState } from '~/atoms/postModalState';
import ReviewPostModal from '~/components/ReviewPostModal';

export default {
  title: 'Component/ReviewPostModal',
  component: ReviewPostModal,
};

export const Default = () => {
  const setPostModal = useSetRecoilState(postModalState);
  return (
    <>
      <button
        onClick={() => setPostModal((prev) => ({ ...prev, isOpen: true }))}
      >
        열기
      </button>
      <ReviewPostModal />
    </>
  );
};
