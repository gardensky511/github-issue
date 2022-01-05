import axios from 'axios';

export const AXIOS = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
});
