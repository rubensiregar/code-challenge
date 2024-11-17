import axios from "axios";

export const callAPI = axios.create({
    baseURL: "https://randomuser.me/api",
});
