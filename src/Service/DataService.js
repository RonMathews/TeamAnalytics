import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
    } from "axios";

export default class DataService {
    static async sendHttpRequest(requestConfig) {
        let endpoint = "http://teamhackanalyticsservice.cloudapp.net";
        let request = {
            baseURL: endpoint,
            method: requestConfig.method,
            url: requestConfig.url
        };

        if (requestConfig.headers) {
            request.headers = requestConfig.headers;
        }
         try {
            let axiosClient = axios.create();
            let response = await axiosClient.request(request);
            return response;
        } catch (err) {
            const httpError = err;
            throw httpError;
        }
    }
}