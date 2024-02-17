import useSWR from "swr";
import axios from "axios";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function usePharmasist() {
  const { data, error, isLoading } = useSWR(
    "https://randomuser.me/api/?nat=gb",
    fetcher,
    {}
  );

  return {
    data,
    isLoading,
    error,
  };
}
