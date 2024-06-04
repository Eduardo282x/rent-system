/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseResponse, ResponseLogin } from '../interfaces/base-response.interface';
import axiosInstance from './axios-instance';

export const getDataApi = (endpoint: string) => {
    return axiosInstance.get(endpoint).then((response) => {
        return response.data;
    }).catch(err => {
        return err.response.data;
    })
}

export const getParamsDataApi = (endpoint: string, params: any) => {
    return axiosInstance.get(endpoint, {params}).then((response) => {
        return response.data;
    }).catch(err => {
        return err.response.data;
    })
}

export const postDataApi = async (endpoint: string, data: any): Promise<ResponseLogin | BaseResponse> => {
    return await axiosInstance.post(endpoint, data).then((response) => {
        return response.data;
    }).catch((err) => {
        return err.response.data;
    })
}

export const putDataApi = async (endpoint: string, data: any): Promise<BaseResponse> => {
    return await axiosInstance.put(endpoint, data).then((response) => {
        return response.data;
    }).catch((err) => {
        return err.response.data;
    })
}

export const deleteDataApi = async (endpoint: string, data: number): Promise<ResponseLogin | BaseResponse> => {
    return await axiosInstance.delete(`${endpoint}/${data}`).then((response) => {
        return response.data;
    }).catch((err) => {
        return err.response.data;
    })
}