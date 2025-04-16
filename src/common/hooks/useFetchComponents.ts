// hooks/useFetchAllComponents.ts
import { useEffect, useState } from "react";
import { Component } from "@/types";

export const useFetchComponents = () => {
  const [data, setData] = useState<Component[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://5cvmq3bb4i.execute-api.us-east-1.amazonaws.com/api/components");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
