import { useSetRecoilState } from 'recoil';
import { postModalState } from '~/atoms/postModalState';
import BasicPostModal from '~/components/BasicPostModal';

export default {
  title: 'Component/BasicPostModal',
  component: BasicPostModal,
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
      <BasicPostModal />
    </>
  );
};
