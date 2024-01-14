import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchTotalResponseType } from '~/types/api/search';
import { useRequestFn } from '~/hooks/api';

export type SearchType = 'all' | 'users';

export const useSearchAll = () => {
  const prevSearch = useRef<string | null>(null);
  // const [searchType, setSearchType] = useState<SearchType>('all');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const type = searchParams.get('type') || 'all';
  const { status, data, request } = useRequestFn<SearchTotalResponseType>({
    method: 'get',
    url: `/search/all/${query}`,
  });

  useEffect(() => {
    if (type !== 'all' || !query) return;
    if (prevSearch.current === query) return;
    prevSearch.current = query;
    request();
  }, [query, type]);
  return { status, data };
};

export default useSearchAll;
