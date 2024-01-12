export interface UserType {
  coverImage: string; // 커버 이미지
  image: string; // 프로필 이미지
  role: string;
  emailVerified: boolean; // 사용되지 않음
  banned: boolean; // 사용되지 않음
  isOnline: boolean;
  posts: PostType[];
  likes: LikeType[];
  comments: string[];
  followers: FollowInfoType[];
  following: FollowInfoType[];
  notifications: NotificationType[];
  messages: MessageType[];
  _id: string;
  fullName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface FollowInfoType {
  _id: string;
  user: string;
  follower: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ChannelType {
  authRequired: boolean; // 사용되지 않음
  posts: string[];
  _id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostType {
  likes: LikeType[];
  comments: CommentType[];
  _id: string;
  image?: string;
  imagePublicId?: string;
  title: string;
  channel: ChannelType;
  author: UserType;
  createdAt: string;
  updatedAt: string;
}

export interface PostSimpleType {
  likes: LikeType[]; // 확인 필요
  comments: CommentType[]; // 확인 필요
  _id: string;
  title: string;
  channel: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}

export interface LikeType {
  _id: string;
  user: string; // 사용자 id
  post: string; // 포스트 id
  createdAt: string;
  updatedAt: string;
}

export interface CommentType {
  _id: string;
  comment: string;
  author: UserType;
  post: string; // 포스트 id
  createdAt: string;
  updatedAt: string;
}

export interface NotificationType {
  seen: boolean;
  _id: string;
  author: UserType;
  user: UserType | string;
  post: string | null; // 포스트 id
  follow?: string; // 사용자 id
  comment?: CommentType;
  message?: string; // 메시지 id
  createdAt: string;
  updatedAt: string;
}

export interface FollowType {
  _id: string;
  user: string; // 사용자 id
  follower: string; // 사용자 id
  createdAt: string;
  updatedAt: string;
}

export interface ConversationType {
  _id: string[];
  message: string;
  sender: UserType;
  receiver: UserType;
  seen: boolean;
  createdAt: string;
}

export interface MessageType {
  _id: string;
  message: string;
  sender: UserType;
  receiver: UserType;
  seen: boolean;
  createdAt: string;
  updatedAt: string;
}
