import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://podcastr-guilhermeassuncao.vercel.app/'
})