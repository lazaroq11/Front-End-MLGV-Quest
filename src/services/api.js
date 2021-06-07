import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.mlgv.tk/",
});

export default api;