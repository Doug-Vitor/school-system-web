import axios, { AxiosError } from 'axios';

import IDefaultResponse from '../core/Interfaces/API/IDefaultResponse'
import IErrorResponse from '../core/Interfaces/API/IErrorResponse'
import toastrNotification from '../services/ToastrServices';

const api = axios.create({
    baseURL: "https://school-system-server.herokuapp.com/api/"
});

const onError = (error: AxiosError | unknown) => {
    const apiError = ((error as AxiosError).response?.data as IErrorResponse);
    const errors = apiError.data ?? apiError.errorMessage;
    toastrNotification(errors, "error");
}

const post = async <TBody, TResponse>(url: string, object: TBody): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    api.post(url, object)
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const get = async <TResponse>(url: string, id?: string): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    api.get(url + `${id ?? ''}`)
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const update = async <TBody, TResponse>(url: string, id: string, object: TBody): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    api.patch(`${url}/${id}`)
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const remove = async <TResponse>(url: string, id: string): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    api.delete(`${url}/${id}`)
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

export { post, get, update, remove }