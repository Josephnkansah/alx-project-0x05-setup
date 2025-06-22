import { ImageProps } from "@/interfaces";
import { useState } from "react";

const useFetchData = <T, R>() => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [generatedImages, setGeneratedImages] = useState<ImageProps[]>([]);

  const fetchData = async (endpoint: string, body: R) => {
    ...
  };

  return { isLoading, responseData, error, fetchData, generatedImages };
};

export default useFetchData;
