import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"

export const useDataSurveiMedia = ({ setOptions, setApiData, setCheckboxStates, setSelectedData }) => {

    const fetchDataSurveiMedia = async () => {
        try {
          setTimeout(async ()=> {
            const surveiMediaResponse = await axiosBaseUrl.get('/surveys');
            const data = surveiMediaResponse.data.data;
            const uniqueReffKronologies = Array.from(new Set(data.media.map((item) => item.reff_kronologies)));

            setOptions(uniqueReffKronologies);
            setApiData(data);
            
            const initialState = data.media.reduce((state, item) => {
              state[item.reff_kronologies_sub] = false;
              return state;
            }, {});
            setCheckboxStates(initialState);

            // Set selected data based on the initial 'reff_kronologies'
            const initialSelectedData = data.media.filter((item) => item.reff_kronologies === uniqueReffKronologies[0]);
            setSelectedData(initialSelectedData);

          },200)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect (()=> {
        fetchDataSurveiMedia();
    },[setOptions, setApiData, setCheckboxStates, setSelectedData]);

    return null;
  };



