import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface ApiProvider {

    /**
     * @method setToken
     * 
     * @description set token to resuse for other request later
     * @param token : the token to identify user
     */
    setToken(token: string): void

    post<T>(url: string, data: any): Promise<AxiosResponse<T>>
    get<T>(url: string): Promise<AxiosResponse<T>>
    put<T>(url: string, data: any): Promise<AxiosResponse<T>>
    delete<T>(url: string, data: any): Promise<AxiosResponse<T>>
}

export class DefaultApiProvider implements ApiProvider {

    axiosInstance: AxiosInstance

    token?: string

    constructor(config: AxiosRequestConfig) {
        this.axiosInstance = axios.create(config)
    }
    setToken(token: string): void {
        this.token = token
    }


    post<T>(url: string, data: any): Promise<T> {
        return this.axiosInstance.post(url, data)
    }
    get<T>(url: string): Promise<T> {
        throw new Error("Method not implemented.");
    }
    put<T>(url: string, data: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    delete<T>(url: string, data: any): Promise<T> {
        throw new Error("Method not implemented.");
    }

}