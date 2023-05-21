import useSWR from "swr";
import authenticatedFetcher from "../authenticatedFetcher";

const usePosts = () => {
  const key = {
    endpoint: `/postagem`,
  };

  const options = {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  };

  const { data, error, mutate } = useSWR(key, authenticatedFetcher, options);

  return {
    posts: data,
    loading: !error && !data,
    error,
    mutate: mutate,
  };
};

export default usePosts;
