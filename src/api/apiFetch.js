import axios from "axios";

export const api_key = 'd15592af56d1dadfa8904eafa60b562f';

export const api = axios.create({
    baseURL : "https://api.themoviedb.org/3"
})