import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"

export const useDataSurveiAlasan = () => {
    const [dataSurveiAlasan, setdataSurveiAlasan] = useState([]);

    const fetchDataSurveiAlasan = async () => {
        try {
          setTimeout(async() => {
            const surveiAlasanResponse = await axiosBaseUrl.get('/surveys');
  
            setdataSurveiAlasan(surveiAlasanResponse.data.data.alasan);
          },200)
        }catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect (()=> {
        fetchDataSurveiAlasan ();
      },[]);

      return {
        data: dataSurveiAlasan,
    };
};