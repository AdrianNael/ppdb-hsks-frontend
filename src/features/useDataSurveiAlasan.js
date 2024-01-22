import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"

export const useDataSurveiAlasan = () => {
    const [dataSurveiAlasan, setdataSurveiAlasan] = useState([]);

    const fetchDataSurveiAlasan = async () => {
        try {
          setTimeout(async() => {
            const surveiAlasanResponse = await axiosBaseUrl.get('/surveys');
            const options = surveiAlasanResponse.data.data.alasan.map((option) => option.reff_kronologies_sub);

            setdataSurveiAlasan(options);
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