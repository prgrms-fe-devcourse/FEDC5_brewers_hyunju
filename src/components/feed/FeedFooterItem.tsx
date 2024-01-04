import Flex from '~/components/common/Flex';
import Image from '~/components/common/Image';
import Text from '~/components/common/Text';

export interface FeedFooterItemPropTypes {
  iconImg: string;
  title: string;
  count: number;
}

const FeedFooterItem = ({ iconImg, title, count }: FeedFooterItemPropTypes) => {
  return (
    <Flex
      alignItems='center'
      style={{ marginRight: '1rem' }}
    >
      <Image
        width={1.125}
        height={1.125}
        src={iconImg}
        alt='icon image'
      ></Image>
      <Text style={{ marginLeft: '0.2rem', color: 'var(--adaptive500)' }}>
        {title}
      </Text>
      <Text style={{ marginLeft: '0.4rem', color: 'var(--adaptive500)' }}>
        {count}개
      </Text>
    </Flex>
  );
};

export default FeedFooterItem;
