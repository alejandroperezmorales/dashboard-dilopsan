
import { useState, useEffect } from 'react';
import { Sale } from '../types';
import { generateSalesData } from '../services/geminiService';

interface UseSalesDataReturn {
  data: Sale[] | null;
  isLoading: boolean;
  error: string | null;
}

export const useSalesData = (): UseSalesDataReturn => {
  const [data, setData] = useState<Sale[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const salesData = await generateSalesData();
        setData(salesData);
      } catch (e: unknown) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, isLoading, error };
};
