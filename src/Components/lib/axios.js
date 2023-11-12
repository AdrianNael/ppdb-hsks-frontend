import axios from "axios";

export const axiosBaseUrl = axios.create({
    baseURL : "http://206.189.82.46:80/api/v1/hsks"
});