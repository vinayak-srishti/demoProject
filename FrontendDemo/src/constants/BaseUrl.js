import axios from 'axios';

const axiosInstance = axios.create({

  //server api
  
  // baseURL: 'http://hybrid.srishticampus.in:4043/legal_liaison_api/', 

//local api

baseURL: 'http://localhost:3000/demo/', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance