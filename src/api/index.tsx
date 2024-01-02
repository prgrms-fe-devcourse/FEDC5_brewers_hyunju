import { useEffect, useState, useCallback } from 'react';
import { AxiosRequestConfig } from 'axios';
import axiosInstance from './axios';
import { API } from '~/constants/message';

type OptionalConfig = Partial<
  Pick<AxiosRequestConfig, 'data' | 'headers' | 'params'>
>;

export function useRequest<T>(config: AxiosRequestConfig) {
  const { status, data, request } = useRequestFn<T>(config);

  useEffect(() => {
    request();
  }, [request]);

  return [status, data];
}

export function useRequestFn<T>(config: AxiosRequestConfig) {
  const [status, setStatus] = useState<
    'stale' | 'loading' | 'error' | 'success'
  >('stale');
  const [data, setData] = useState<T>(null as T);

  const request = useCallback(
    async (optionalConfig?: OptionalConfig) => {
      try {
        setStatus('loading');
        const response = await axiosInstance.request({
          headers: { 'Content-Type': 'application/json' },
          ...config,
          ...optionalConfig,
        });

        if (response.status < 200 || response.status > 299) {
          throw new Error(API.REQUEST_ERROR);
        }

        setStatus('success');
        setData(response.data);
      } catch (e: unknown) {
        setStatus('error');
        if (e instanceof Error) {
          console.error(e.message);
        } else {
          console.error('api/axios: 알 수 없는 에러가 발생했습니다. (request)');
        }
      }
    },
    [config]
  );

  return { status, data, request };
}
