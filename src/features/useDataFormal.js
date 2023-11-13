import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"


export const useDataFormal = () => {
const [dataFormal, setDataFormal] = useState([]);
  const [isLoading, setIsLoading]= useState(false);

      const fetchDataFormal = async () => {
        setIsLoading(true);
        try {
          setTimeout(async ()=> {
            const formalResponse = await axiosBaseUrl.get('/education-types');

            console.log(formalResponse.data);
            setDataFormal(formalResponse.data);
            setIsLoading(false);
          },200)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  useEffect (()=> {
    fetchDataFormal();
  },[]);

      return {
        data : dataFormal,
        isLoading
    };
};

