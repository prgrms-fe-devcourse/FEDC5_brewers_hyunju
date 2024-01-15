import { useSetRecoilState } from 'recoil';
import ReviewPostModal from './components/ReviewPostModal';
import BasicPostModal from './components/BasicPostModal';
import MogakPostModal from './components/MogakPostModal';
import { postModalState } from './recoil/postModal/atoms';

const Test = () => {
  const setPostModalOpen = useSetRecoilState(postModalState);
  return (
    <div>
      <button
        onClick={() =>
          setPostModalOpen((prev) => ({
            ...prev,
            type: 'basic',
          }))
        }
      >
        일반
      </button>
      <button
        onClick={() =>
          setPostModalOpen((prev) => ({
            ...prev,
            type: 'review',
          }))
        }
      >
        리뷰
      </button>
      <button
        onClick={() =>
          setPostModalOpen((prev) => ({
            ...prev,
            type: 'mogakco',
          }))
        }
      >
        모각코
      </button>
      <button
        onClick={() =>
          setPostModalOpen((prev) => ({
            ...prev,
            isOpen: true,
          }))
        }
      >
        Click
      </button>
      <BasicPostModal />
      <ReviewPostModal />
      <MogakPostModal />
    </div>
  );
};

export default Test;
