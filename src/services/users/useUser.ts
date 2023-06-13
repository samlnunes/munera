import useSWR from "swr";
import authenticatedFetcher from "../authenticatedFetcher";

const useUser = (id: number) => {
  const key = {
    endpoint: `/clientes/${id}`,
  };

  const options = {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  };

  const { data, error, mutate } = useSWR(key, authenticatedFetcher, options);

  return {
    user: data,
    loading: !error && !data,
    error,
    mutate: mutate,
  };
};

export default useUser;
