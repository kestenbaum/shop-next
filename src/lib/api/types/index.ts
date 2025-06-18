export type AxiosResponse<T> = {
  status: number | string;
  data: T;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
