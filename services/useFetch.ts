import { useCallback, useEffect, useState } from "react";

const useFetch = <T>(fetchFuntion: () => Promise<T>, autoFetch = true) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchFuntion();

      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("An reror occurred"));
    } finally {
      setLoading(false);
    }
  }, [fetchFuntion]);

  const reset = useCallback(() => {
    setData(null);
    setLoading(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch, fetchData]);
  return { data, loading, error, refetch: fetchData, reset };
};

export default useFetch;
