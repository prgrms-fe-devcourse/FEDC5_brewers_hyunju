import { useState } from 'react';
import { axiosInstance } from '~/api/axios';
import * as searchApiType from '~/types/api/search';

const useSearch = () => {
  const [searchUserResults, setSearchUserResults] = useState<
    searchApiType.SearchUserResponseType | undefined
  >(undefined);
  const [searchAllResults, setSearchAllResults] = useState<
    searchApiType.SearchTotalResponseType | undefined
  >(undefined);

  const searchUsers = async (query: string) => {
    try {
      const SEARCH_USERS_URL = `/search/users/${query}`;
      const { data } =
        await axiosInstance.get<searchApiType.SearchUserResponseType>(
          SEARCH_USERS_URL
        );
      setSearchUserResults(data);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Search: ${e.message} (searchUsers/${query})`);
      }
    }
  };

  const searchAll = async (query: string) => {
    try {
      const SEARCH_ALL_URL = `/search/all/${query}`;
      const { data } =
        await axiosInstance.get<searchApiType.SearchTotalResponseType>(
          SEARCH_ALL_URL
        );
      setSearchAllResults(data);
      return data;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(`Search: ${e.message} (searchAll/${query})`);
      }
    }
  };

  return { searchUserResults, searchAllResults, searchUsers, searchAll };
};

export default useSearch;
