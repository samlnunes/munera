import useSWR from "swr";
import authenticatedFetcher from "../authenticatedFetcher";

const useCompany = (id: number) => {
  const key = {
    endpoint: `/empresas/${id}`,
  };

  const options = {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  };

  const { data, error, mutate } = useSWR(key, authenticatedFetcher, options);

  return {
    company: data,
    loading: !error && !data,
    error,
    mutate: mutate,
  };
};

export default useCompany;
