import { useEffect, useState } from "react";
import { axiosBaseUrl } from "../Components/lib/axios";

export const useDataSekolah = (jenisPendidikan) => {
  const [dataSekolah, setDataSekolah] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDataSekolah = async (jenisPendidikan) => {
    setIsLoading(true);
    try {
      const sekolahResponse = await axiosBaseUrl.get(`/education-types/${jenisPendidikan}/schools`);
      setDataSekolah(sekolahResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDataSekolah(jenisPendidikan);
  }, [jenisPendidikan]);

  return {
    data: dataSekolah,
    isLoading,
  };
};