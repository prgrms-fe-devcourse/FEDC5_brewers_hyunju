import { atom } from 'recoil';

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
