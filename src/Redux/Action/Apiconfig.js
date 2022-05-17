import axios from 'axios';


export const defaultOptionscreate = () =>{

    const defaultOptions = {
    baseURL: 'https://react-rails-api-demo.herokuapp.com/api/v1/' ,
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
    }
    }
    let instance = axios.create(defaultOptions);
    instance.interceptors.request.use(function (config) {
      const token = localStorage.getItem("Token");
      config.headers.Authorization =token;
      return config;
    })
    return instance;
};



export const defaultOptionshow = () =>{

  const defaultOptions = {
  baseURL: 'https://react-rails-api-demo.herokuapp.com/api/v1/posts' ,
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  }
  }
  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("Token");
    config.headers.Authorization =token;
    return config;
  })
  return instance;
};





