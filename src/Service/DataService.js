import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse
    } from "axios";

export default class DataService {
    async sendHttpRequest(requestConfig) {
        let endpoint = "http://teamhackanalyticsservice.cloudapp.net";
        let request = {
            baseURL: endpoint,
            method: requestConfig.method,
            url: requestConfig.url,
            withCredentials: withCredentials
        };

        if (requestConfig.headers) {
            request.headers = requestConfig.headers;
        }
         try {
            axiosClient: AxiosInstance = axios.create();
            let response = await this.axiosClient.request(request);
            return response;
        } catch (err) {
            const httpError = err;
            throw httpError;
        }
    }
}