import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"

export const useDataSurveiMedia = () => {
    const [dataSurveiMedia, setdataSurveiMedia] = useState([]);

    const fetchDataSurveiMedia = async () => {
        try {
          setTimeout(async ()=> {
            const surveiMediaResponse = await axiosBaseUrl.get('/surveys');
  
            setdataSurveiMedia(surveiMediaResponse.data.data.media);
          },200)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect (()=> {
        fetchDataSurveiMedia();
    },[]);

      return {
        data: dataSurveiMedia,
    };
};



