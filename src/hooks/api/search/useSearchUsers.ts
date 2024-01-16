import { SearchUserResponseType } from '~/types/api/search';
import { useRequestFn } from '~/hooks/api';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useSearchUsers = () => {
  // const prevSearch = useRef<string | null>(null);
  // const [searchType, setSearchType] = useState<SearchType>('all');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const type = searchParams.get('type') || 'all';
  const { request, status, data, error } = useRequestFn<SearchUserResponseType>(
    {
      method: 'get',
      url: `/search/users/${query}`,
    }
  );

  useEffect(() => {
    if (type !== 'users' || !query) return;
    // if (prevSearch.current === query) return;
    // prevSearch.current = query;
    request();
  }, [query, type]);
  return { request, status, data, error };
};

export default useSearchUsers;
