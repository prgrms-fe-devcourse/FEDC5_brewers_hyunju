import { useLocation } from 'react-router-dom';
import Text from '~/components/common/Text';

const SearchPage = () => {
  const location = useLocation();

  return (
    <>
      <Text>Search</Text>
      <Text>{location.search}</Text>
    </>
  );
};

export default SearchPage;
