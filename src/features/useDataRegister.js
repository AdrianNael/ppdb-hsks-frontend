import { useEffect, useState } from "react";
import { axiosBaseUrl } from "../Components/lib/axios";

export const useDataRegister = () => {
  const [dataGuardian, setDataGuardian] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataGuardian = async () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        const guardianResponse = await axiosBaseUrl.get("/guardians");
        setDataGuardian(guardianResponse.data);
        setIsLoading(false);
      }, 200);
    } catch (err) {
      console.error("Data Not Found", err);
    }
  };
  useEffect(() => {
    fetchDataGuardian();
  }, []);
  return {
    data: dataGuardian,
    isLoading,
  };
};
