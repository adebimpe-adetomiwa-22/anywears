import axios from 'axios';

const authFetch = axios.create({
    baseURL: 'https://fakestoreapi.com',
});

export default authFetch;
