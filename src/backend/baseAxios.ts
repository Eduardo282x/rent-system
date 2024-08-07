/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseResponse, ResponseLogin, UserData } from '../interfaces/base-response.interface';
import { actionsValid } from '../interfaces/form.interface';
import axiosInstance from './axios-instance';

export interface BaseApiReturn {
    close: boolean,
    open: boolean,
    body: object,
    title: string,
    action: actionsValid,
    // data: any
}

export const BaseApi = async (action: actionsValid, data: any, body: any, keyWord: string, urlComponent: string): Promise<BaseApiReturn> => {
    const response: BaseApiReturn = {
        close: false,
        open: false,
        body: {},
        title: '',
        action: '',
    };
    
    response.body = action === 'edit' ? data : body
    response.title = action === 'edit' ? 'Actualizar' : 'Agregar';
    response.action = action === 'edit' ? 'editApi' : 'addApi';
    if (action === 'add' || action === 'edit') {
        response.open = true
    }

    if (action === 'delete') {
        await deleteDataApi(urlComponent, data[keyWord])
    }

    if (action == 'addApi') {
        await postDataApi(urlComponent, data)
        response.close = true;
    }
    if (action == 'editApi') {
        console.log('a editar ',data);
        await putDataApi(urlComponent, data[keyWord], data)
        response.close = true;
    }

    return response;
}

export const getDataApi = (endpoint: string) => {
    return axiosInstance.get(endpoint).then((response) => {
        return response.data;
    }).catch(err => {
        return err.response.data;
    })
}

export const getDataFileApi = (endpoint: string) => {
    return axiosInstance.get(endpoint, {
        responseType: 'blob'
    }).then((response) => {
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

export const postDataApi = async (endpoint: string, data: any): Promise<ResponseLogin | BaseResponse | UserData | any> => {
    return await axiosInstance.post(endpoint, data).then((response) => {
        return response.data;
    }).catch((err) => {
        return err.response.data;
    })
}
export const postDataFileApi = async (endpoint: string, data: any): Promise<ResponseLogin | BaseResponse | UserData | any> => {
    return await axiosInstance.post(endpoint, data, {responseType: 'blob'}).then((response) => {
        return response.data;
    }).catch((err) => {
        return err.response.data;
    })
}

export const putDataApi = async (endpoint: string,id: number, data: any): Promise<BaseResponse> => {
    return await axiosInstance.put(`${endpoint}/${id}`, data).then((response) => {
        return response.data;
    }).catch((err) => {
        return err.response.data;
    })
}
export const putDataApiNormal = async (endpoint: string, data: any): Promise<BaseResponse> => {
    return await axiosInstance.put(`${endpoint}`, data).then((response) => {
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