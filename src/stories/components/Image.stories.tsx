import Image, { ImagePropsType } from '~/components/common/Image';

export default {
  title: 'Component/Image',
  component: Image,
  argTypes: {
    lazy: {
      control: { type: 'boolean' },
    },
    block: {
      control: { type: 'boolean' },
    },
    src: {
      type: { name: 'string', require: true },
      control: { type: 'text' },
    },
    placeholder: {
      type: { name: 'string' },
      control: { type: 'text' },
    },
    threshold: {
      type: { name: 'number' },
      control: { type: 'number' },
    },
    width: {
      control: { type: 'range', min: 200, max: 600 },
    },
    height: {
      control: { type: 'range', min: 200, max: 600 },
    },
    alt: {
      control: 'string',
    },
    mode: {
      options: ['cover', 'fill', 'contain'],
      control: { type: 'inline-radio' },
    },
  },
  args: {
    lazy: false,
    block: false,
    src: 'https://picsum.photos/200',
    threshold: 0.5,
    width: 200,
    height: 200,
    mode: 'cover',
  },
};

export const Default = (args: ImagePropsType) => {
  return <Image {...args} />;
};

export const Lazy = (args: ImagePropsType) => {
  return (
    <div>
      {Array.from(new Array(20), (_, k) => k).map((i) => (
        <Image
          {...args}
          lazy
          block
          src={`${args.src}?${i}`}
          key={i}
        />
      ))}
    </div>
  );
};
