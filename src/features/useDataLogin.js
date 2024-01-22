import { useState } from "react";
import { axiosBaseUrl } from "../Components/lib/axios";
import { useEffect } from "react";

export const useDataLogin = () => {
  const [dataLogin, setDataLogin] = useState();
  const fetchDataLogin = async () => {
    try {
      setTimeout(async () => {
        const loginResponse = await axiosBaseUrl.get("/users/login");
        setDataLogin(loginResponse.data);
      }, 200);
    } catch (err) {
      console.error("Data Not Found", err);
    }
  };
  useEffect(() => {
    fetchDataLogin();
  }, []);
  return {
    data: dataLogin,
  };
};
