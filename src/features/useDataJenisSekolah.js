import { useEffect, useState } from "react";
import { axiosBaseUrl } from "../Components/lib/axios";

export const useDataJenisSekolah = () => {
  const [dataJenisSekolah, setDataJenisSekolah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJenisSekolah = async () => {
    setIsLoading(true);
    try {
      setTimeout(async () => {
        const DataJenisSekolahResponse = await axiosBaseUrl.get(
          "/education-types"
        );

        setDataJenisSekolah(DataJenisSekolahResponse.data);
        setIsLoading(false);
      }, 200);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchJenisSekolah();
  }, []);

  return {
    data: dataJenisSekolah,
    isLoading,
  };
};
