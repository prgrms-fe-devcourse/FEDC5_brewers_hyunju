import { atom } from 'recoil';
import { UserType } from '~/types/common';

export const userState = atom<UserType | null>({
  key: 'userState',
  default: null,
});
