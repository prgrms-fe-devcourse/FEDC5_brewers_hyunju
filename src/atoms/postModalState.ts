import { atom, selector } from 'recoil';

type PostModalType = 'basic' | 'review' | 'mogakco';
export interface ReviewFormType {
  plugs?: string;
  quiet?: string;
  crowded?: string;
  seat?: string;
}
export interface MogakFormType {
  date?: string;
  startTime?: string;
  endTime?: string;
  placeName?: string;
  address?: string;
}
export const postModalState = atom<{
  type: PostModalType;
  isOpen: boolean;
  content: string;
  reviewForm: ReviewFormType;
  mogakForm: MogakFormType;
}>({
  key: 'PostModal',
  default: {
    type: 'basic',
    isOpen: false,
    content: '',
    reviewForm: {},
    mogakForm: {},
  },
});

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
