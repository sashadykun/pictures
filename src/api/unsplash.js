import axios from 'axios';
import { KEY } from '../config'; 

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID ' + KEY.API_KEY
    }
})