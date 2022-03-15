import { useState } from 'react';

const useFetching = (callback: () => Promise<void>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setTimeout(() => setIsLoading(false), 2000);
    }
  };

  return [fetching, isLoading, error] as const;
};

export default useFetching;
