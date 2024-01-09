import ProfileTemplate, {
  ProfileTemplatePropsType,
} from '~/components/templates/ProfileTemplate';
import ProfileSkeleton from '~/components/templates/ProfileSkeleton';

export default {
  title: 'Template/Profile',
  component: [ProfileTemplate, ProfileSkeleton],
};

export const Template = (args: ProfileTemplatePropsType) => {
  return <ProfileTemplate {...args} />;
};

export const Skeleton = () => {
  return <ProfileSkeleton />;
};
