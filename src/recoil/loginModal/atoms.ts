import { atom } from 'recoil';

export const isLoginModalOpenState = atom<boolean>({
  key: 'isLoginModalOpen',
  default: false,
});
