import axios from 'axios';
const api = axios.create({
  baseURL:'https://blogapp-app-backend.herokuapp.com'
})

export default api;
