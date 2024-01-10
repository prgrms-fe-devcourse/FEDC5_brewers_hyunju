import SearchTemplate, {
  SearchTemplatePropsType,
} from '~/components/SearchTemplate';

export default {
  title: 'Template/Search',
  component: [SearchTemplate],
};

export const Template = (args: SearchTemplatePropsType) => {
  return <SearchTemplate {...args} />;
};
