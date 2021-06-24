import axios from 'axios';


const api = axios.create({
    baseURL: "https://api.mlgv.tk/",
    responseType:'json'
});



export default api;