import { useSetRecoilState } from 'recoil';
import { postModalState } from '~/atoms/postModalState';
import MogakPostModal from '~/components/common/MogakPostModal';

export default {
  title: 'Component/MogakPostModal',
  component: MogakPostModal,
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
      <MogakPostModal />
    </>
  );
};
