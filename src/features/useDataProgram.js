import  { useEffect, useState } from "react";
import {axiosBaseUrl} from "../Components/lib/axios"


export const useDataProgram = () => {
    const [programData, setProgramData] = useState([]);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosBaseUrl.get('/company/1/department/12/programs'); // Replace with your actual API endpoint
            setProgramData(response.data.data);
            setIsLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      return {
        data : programData,
        isLoading
    };
};

