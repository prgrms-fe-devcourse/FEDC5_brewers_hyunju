import { atom, selector } from 'recoil';

type PostModalType = 'basic' | 'review' | 'mogakco';
export const postModalState = atom<{ type: PostModalType; isOpen: boolean }>({
  key: 'PostModal',
  default: {
    type: 'basic',
    isOpen: false,
  },
});

export const postModalOpenState = selector({
  key: 'PostModalOpen',
  get: ({ get }) => {
    return get(postModalState).isOpen;
  },
});
