import axios, { AxiosError } from 'axios';
import toastrNotification from '../services/ToastrServices';

import IDefaultRequestPayload from '../core/Interfaces/API/Requests/IDefaultRequestPayload';
import IDefaultResponse from '../core/Interfaces/API/Responses/IDefaultResponse'
import IErrorResponse from '../core/Interfaces/API/Responses/IErrorResponse';
import { getStorageUser } from '../services/AuthServices';

const api = axios.create({
    baseURL: "https://school-system-server.herokuapp.com/api/"
});

const onError = (error: AxiosError | unknown) => {
    const apiError = ((error as AxiosError).response?.data as IErrorResponse);
    const errors = Object.keys(apiError.data).length ? apiError.data : apiError.errorMessage;
    toastrNotification(errors, "error");
}

const post = async <TBody, TResponse>(requestPayload: IDefaultRequestPayload, object: TBody): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    const payload = getRequestPayload(requestPayload);
    api.post(payload.url, object, { headers: payload.headers })
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const get = async <TResponse>(requestPayload: IDefaultRequestPayload, id?: string): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    const payload = getRequestPayload(requestPayload);
    payload.url += id ?? '';
    api.get(payload.url, { headers: payload.headers })
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const update = async <TBody, TResponse>(requestPayload: IDefaultRequestPayload, object: TBody, id?: string): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    const payload = getRequestPayload(requestPayload);
    console.log(payload)
    payload.url += id ?? '';
    api.patch(payload.url, object, { headers: payload.headers })
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const remove = async <TResponse>(requestPayload: IDefaultRequestPayload, id: string): Promise<IDefaultResponse<TResponse>> => new Promise((resolve, reject) => {
    const payload = getRequestPayload(requestPayload);
    payload.url += id ?? '';
    api.delete(payload.url, { headers: payload.headers })
        .then(resp => resolve(resp.data))
        .catch((error: AxiosError | unknown) => {
            onError(error);
            reject(error)
        });
});

const getRequestPayload = (requestPayload: IDefaultRequestPayload) => {
    const { url, protectedArea } = requestPayload;

    const payload = {
        url: protectedArea ? 'protected/' + url : url,
        ...protectedArea && {
            headers: {
                Authorization: 'Bearer ' + getStorageUser().token.generatedToken
            }
        }
    }

    return { ...payload };
}

export { post, get, update, remove }