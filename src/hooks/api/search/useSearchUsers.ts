import { useState } from 'react';
import { request } from '~/api/axios';
import { getItem } from '~/utils/localStorage';
import { handleError } from '~/utils/handleError';
import { SearchUserResponseType } from '~/types/api/search';

export const useSearchUsers = (query: string) => {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [users, setUsers] = useState<SearchUserResponseType | null>(null);
  const searchUsers = async () => {
    if (!query) {
      return;
    }
    const SEARCH_USERS_URL = `/search/users/${encodeURIComponent(query)}`;
    const userToken = getItem<string | null>('userToken', null);
    setStatus('loading');
    try {
      const response = await request({
        method: 'GET',
        url: SEARCH_USERS_URL,
        headers: {
          ...(userToken ? { Authorization: `Bearer ${userToken}` } : {}),
        },
      });
      setUsers(response.data);
      setStatus('success');
    } catch (e: unknown) {
      handleError(e, 'SearchUsers');
      setStatus('error');
    }
  };

  return { status, users, searchUsers };
};

export default useSearchUsers;
