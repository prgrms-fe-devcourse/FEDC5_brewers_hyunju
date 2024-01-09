import { atom, selector } from 'recoil';

type PostModalType = 'basic' | 'review' | 'mogakco';
export const postModalState = atom<{
  type: PostModalType;
  isOpen: boolean;
  content: string;
}>({
  key: 'PostModal',
  default: {
    type: 'basic',
    isOpen: false,
    content: '',
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
