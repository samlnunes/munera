import useSWR from "swr";
import authenticatedFetcher from "../authenticatedFetcher";

const useCompanies = () => {
  const key = {
    endpoint: `/empresas`,
  };

  const options = {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  };

  const { data, error, mutate } = useSWR(key, authenticatedFetcher, options);

  return {
    companies: data,
    loading: !error && !data,
    error,
    mutate: mutate,
  };
};

export default useCompanies;
