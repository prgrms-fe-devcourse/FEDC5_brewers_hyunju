import ProfileImageUpload, {
  ProfileImageUploadPropTypes,
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

export const Default = (args: ProfileImageUploadPropTypes) => {
  return <ProfileImageUpload {...args}></ProfileImageUpload>;
};

Default.args = {
  currentImageUrl: 'https://picsum.photos/200',
};
