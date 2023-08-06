import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const usePosts = (userId?: string) => {
    const url = userId ? `/api/posts/userId=${userId}`: '/api/posts';
  const { data, error, isLoading, mutate } = useSWR(userId? `/api/users/${userId}`:null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default usePosts;