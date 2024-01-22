import axios from "axios";

export const axiosBaseUrl = axios.create({
    baseURL : "http://168.63.239.37:80/api/v1/hsks"
});