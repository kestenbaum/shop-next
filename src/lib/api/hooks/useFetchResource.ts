import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

import { api } from '@/lib/api/instance';

type ApiResponse<T> = {
  data: T;
  status: number | string;
};

const useFetchResource = <T>(url: string, category?: string) => {
  const { data, isLoading, isError, error, status } = useQuery<ApiResponse<T>>({
    queryKey: category ? [url, category] : [url],
    queryFn: async (): Promise<ApiResponse<T>> => {
      const response: AxiosResponse<ApiResponse<T>> = await api.get(url);
      return {
        data: response.data.data,
        status: response.data.status,
      };
    },
  });

  return { data, isLoading, isError, error, status };
};

export default useFetchResource;
