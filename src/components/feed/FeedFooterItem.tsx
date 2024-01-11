import { IconHeart, IconMessageCircle2 } from '@tabler/icons-react';
import Flex from '~/components/common/Flex';
import Text from '~/components/common/Text';

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
    <Flex alignItems='center'>
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
      <Text
        size='sm'
        style={{ marginLeft: '0.2rem', color: 'var(--adaptive500)' }}
      >
        {title}
      </Text>
      <Text
        size='sm'
        style={{ marginLeft: '0.25rem', color: 'var(--adaptive500)' }}
      >
        {count}
      </Text>
    </Flex>
  );
};

export default FeedFooterItem;
