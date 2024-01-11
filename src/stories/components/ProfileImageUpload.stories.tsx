import ProfileImageUpload, {
  ProfileImageUploadPropsType,
} from '~/components/uploadImage/ProfileImageUpload';

export default {
  title: 'Component/ProfileImageUpload',
  component: ProfileImageUpload,
  argTypes: {
    currentImageUrl: {
      control: { type: 'text' },
    },
  },
};

export const Default = (args: ProfileImageUploadPropsType) => {
  return <ProfileImageUpload {...args}></ProfileImageUpload>;
};

Default.args = {
  currentImageUrl: 'https://picsum.photos/200',
};
