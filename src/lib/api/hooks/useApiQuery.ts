import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '@/lib/api/instance';
import { AxiosResponse, Post } from '@/lib/api/types';

export const useApiQuery = <T>(url: string, key: string) => {
  const { data, status, error, isLoading, isError } = useQuery<AxiosResponse<T>, AxiosError>({
    queryKey: [key],
    queryFn: async (): Promise<AxiosResponse<T>> => await api.get<T>(url),
  });

  const errorMessage = isError ? error?.message || 'Unknown error' : null;

  return {
    data: data?.data,
    status,
    isLoading,
    errorMessage,
  };
};
