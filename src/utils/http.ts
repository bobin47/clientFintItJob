import axios, { type AxiosInstance } from "axios";
const url:string = "http://localhost:3000/"

class Http {
    instance: AxiosInstance;
    constructor() {
        this.instance = axios.create({
            baseURL: url,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        this.instance.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        })

        this.instance.interceptors.response.use(function (response) {
           
            return response;
        }, function (error) {
            
            return Promise.reject(error);
        });
    }
}

const http = new Http().instance

export default http