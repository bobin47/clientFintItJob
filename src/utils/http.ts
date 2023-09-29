import axios, { AxiosError, type AxiosInstance } from 'axios'
import {
  message,
} from "antd";
import {
  getAccessTokenFormLC,
  getRefresherTokenFormLC,
  setAccessTokenFormLC,
  setUserFormLC,
} from "./auth.utils";
const url: string = "http://localhost:4000/";

class Http {
  instance: AxiosInstance;
  accessToken: string;
  refreshToken: string;
  constructor() {
    this.accessToken = getAccessTokenFormLC();
    this.refreshToken = getRefresherTokenFormLC();
    this.instance = axios.create({
      baseURL: url,
      timeout: 10000,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.instance.interceptors.request.use(
      function(config) {
            const accessToken = getAccessTokenFormLC()
            config.headers = {
                ...config.headers,
                accept: "application/json",
          Authorization: `${
            localStorage.getItem("user") ? "Bearer " + accessToken : ""
          }`,
            }
        return config;
      },
      function(error) {
        console.log(error)
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      function(response) {
        
        const { url } = response.config;
        if (url === "user/login") {
          message.success("Login ok");
          const data = response.data
          console.log(data)
          const { token, user } = data;
          console.log(token, user)
          setAccessTokenFormLC(token);
          setUserFormLC(user);
        }

        if(url === "user/register"){
           message.success("Register ok");
        }
        
        return response;
      },
      function(error:AxiosError) {
        if (error.config.url === "user/login") {
          message.error("Login fail");
        }

        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
