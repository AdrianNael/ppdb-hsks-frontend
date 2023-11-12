import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"


export const useDataSekolah = () => {
    const [dataSekolah, setDataSekolah] = useState([]);
    const [isLoading, setIsLoading]= useState(false);

        const fetchDataSekolah = async () => {
          setIsLoading(true);
          try {
            setTimeout(async ()=> {
              const sekolahResponse = await axiosBaseUrl.get('/education-types/FORMAL/schools');

              setDataSekolah(sekolahResponse.data);
              setIsLoading(false);
            },200)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

    useEffect (()=> {
      fetchDataSekolah();
    },[]);

      return {
        data : dataSekolah,
        isLoading
    };
};

