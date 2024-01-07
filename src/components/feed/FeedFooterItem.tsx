import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';
import { IconHeart } from '@tabler/icons-react';
import { IconMessageCircle2 } from '@tabler/icons-react';

export interface FeedFooterItemPropTypes {
  iconType: string;
  title: string;
  count: number;
}

const FeedFooterItem = ({
  iconType,
  title,
  count,
}: FeedFooterItemPropTypes) => {
  return (
    <Flex
      alignItems='center'
      style={{ marginRight: '1rem' }}
    >
      {iconType === 'like' ? (
        <IconHeart
          width='1.4rem'
          height='1.4rem'
          color='var(--adaptive500)'
        ></IconHeart>
      ) : (
        <IconMessageCircle2
          width='1.4rem'
          height='1.4rem'
          color='var(--adaptive500)'
        ></IconMessageCircle2>
      )}
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
