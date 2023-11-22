import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"


export const useDataSurveiVoting = () => {
const [dataSurveiVoting, setdataSurveiVoting] = useState([]);

      const fetchDataSurveiVoting = async () => {
        try {
          setTimeout(async ()=> {
            const surveiVotingResponse = await axiosBaseUrl.get('/surveys');
            const options = surveiVotingResponse.data.data.voting.map((option) => option.reff_kronologies_sub);

            setdataSurveiVoting(options);
          },200)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    useEffect (()=> {
      fetchDataSurveiVoting();
    },[]);

    // console.log('Data :', dataSurveiMedia);
      return {
        data: dataSurveiVoting,
    };
};

