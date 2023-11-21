import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"


export const useDataSurvei = () => {
const [dataSurvei, setdataSurvei] = useState([]);

      const fetchDataSurvei = async () => {
        try {
          setTimeout(async ()=> {
            const surveiResponse = await axiosBaseUrl.get('/surveys');

            setdataSurvei(surveiResponse.data.data.voting);
          },200)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  useEffect (()=> {
    fetchDataSurvei();
  },[]);

  console.log('Data Survei:', dataSurvei);


      return {
        data : dataSurvei,
    };
};

