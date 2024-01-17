import { selector } from 'recoil';
import { postModalState } from './atoms';

export const postModalOpenState = selector({
  key: 'PostModalOpen',
  get: ({ get }) => {
    return get(postModalState).isOpen;
  },
});

export const postModalContentState = selector({
  key: 'PostModalContent',
  get: ({ get }) => {
    return get(postModalState).content;
  },
});
export const basicPostOpenState = selector({
  key: 'BasicPostOpen',
  get: ({ get }) => {
    const postModal = get(postModalState);
    return postModal.isOpen && postModal.type === 'basic';
  },
});
export const reviewPostOpenState = selector({
  key: 'ReviewPostOpen',
  get: ({ get }) => {
    const postModal = get(postModalState);
    return postModal.isOpen && postModal.type === 'review';
  },
});
export const mogakPostOpenState = selector({
  key: 'MogakPostOpen',
  get: ({ get }) => {
    const postModal = get(postModalState);
    return postModal.isOpen && postModal.type === 'mogakco';
  },
});

export const isPostEmptyState = selector({
  key: 'IsPostEmpty',
  get: ({ get }) => {
    const postModal = get(postModalState);
    return (
      postModal.content === '' &&
      Object.entries(postModal.reviewForm).length === 0 &&
      !postModal.mogakForm.address &&
      !postModal.mogakForm.placeName &&
      !postModal.mogakForm.date &&
      !postModal.mogakForm.startTime &&
      !postModal.mogakForm.endTime
    );
  },
});
export const reviewFormState = selector({
  key: 'ReviewForm',
  get: ({ get }) => {
    return get(postModalState).reviewForm;
  },
});
