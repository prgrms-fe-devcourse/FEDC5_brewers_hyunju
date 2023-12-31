import { useState } from 'react';
import { request } from '~/api/axios';
import { handleError } from '~/utils/handleError';
import { SearchTotalResponseType } from '~/types/api/search';

export const useSearchAll = (query: string) => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [results, setResults] = useState<SearchTotalResponseType | null>(null);
  const searchAll = async () => {
    if (!query) {
      return;
    }
    const SEARCH_ALL_URL = `/search/all/${encodeURIComponent(query)}`;
    setStatus('loading');
    try {
      const response = await request({
        method: 'get',
        url: SEARCH_ALL_URL,
      });
      setResults(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'SearchAll');
      setStatus('error');
    }
  };

  return { status, results, searchAll };
};

export default useSearchAll;
