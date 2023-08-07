import useSWR from 'swr';

import fetcher from '@/libs/fetcher';

const usePost = (postId: string) => {
        //check for post id
  const { data, error, isLoading, mutate } = useSWR(postId ? `/api/posts/${postId}` : null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default usePost;