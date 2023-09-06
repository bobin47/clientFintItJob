import { ResponseSuccessAuth } from "../types/login/login.type";
import axios, { type AxiosInstance } from "axios";

import {
  getAccessTokenFormLC,
  getRefresherTokenFormLC,
  setAccessTokenFormLC,
  setRefresherTokenFormLC,
  setUserFormLC,
} from "./auth.utils";
const url: string = "http://localhost:3000/";

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
        if (url === "auth/login") {
          const data = response.data as ResponseSuccessAuth;
          const { access_token, refresh_token, user } = data.res.data;
          setAccessTokenFormLC(access_token);
          setRefresherTokenFormLC(refresh_token);
          setUserFormLC(user);
        }
        return response;
      },
      function(error) {
        console.log(error)

        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
