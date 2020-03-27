import axios from 'axios';


const api = axios.create({
    baseURL: 'http://endereço:porta'
});

export default api;