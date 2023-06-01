import axios from 'axios';

if (window.location.host !== 'localhost:3000') {
  console.clear();
}

export const apiBaseUrl = process.env.REACT_APP_BASE_URL

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    Authorization:  true,// Since this is a sample project, I set it to `true`; otherwise, I pass a token to it.
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
