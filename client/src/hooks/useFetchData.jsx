import { useContext, useEffect, useState } from "react";
import { authContext } from "../context/AuthContext";

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const { token } = useContext(authContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message);
        }
        setData(result.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error.message);
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetchData;
