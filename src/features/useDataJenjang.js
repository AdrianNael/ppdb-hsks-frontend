import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"


export const useDataJenjang = () => {
const [dataJenjang, setDataJenjang] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

      const fetchDataJenjang = async () => {
        setIsLoading(true);
        try {
          setTimeout(async ()=> {
            const jenjangResponse = await axiosBaseUrl.get('/company/1/department');

            setDataJenjang(jenjangResponse.data);
            setIsLoading(false);
          },200)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  useEffect (()=> {
      fetchDataJenjang();
  },[]);

      return {
        data : dataJenjang,
        isLoading
    };
};

