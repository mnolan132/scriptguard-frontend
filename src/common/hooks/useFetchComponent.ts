import { useEffect, useState } from "react";
import { Component } from "@/types";

const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

export const useFetchComponent = (id: string | null) => {
  const [data, setData] = useState<Component | null>(null);
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${API_ENDPOINT}/components/${id}`);
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
  }, [id]);

  return { data, loading, error };
};
