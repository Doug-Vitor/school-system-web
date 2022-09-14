import axios from 'axios';

import IDefaultResponse from '../core/Interfaces/API/IDefaultResponse'
import IErrorResponse from '../core/Interfaces/API/IErrorResponse'

const api = axios.create({
   baseURL: "https://school-system-server.herokuapp.com/api/" 
});

const post = <T>() => async (url: string, object: T): Promise<IDefaultResponse<T>> => new Promise((resolve, reject) => {
    api.post(url, object).then(resp => resolve(resp.data)).catch(error => reject(error));
});

const get = <T>() => async (url: string, id?: string): Promise<IDefaultResponse<T>> => new Promise((resolve, reject) => {
    api.get(url + `${id ?? ''}`).then(resp => resolve(resp.data)).catch(error => reject(error));
});

const update = <T>() => async (url: string, id: string): Promise<IDefaultResponse<T>> => new Promise((resolve, reject) => {
    api.patch(`${url}/${id}`).then(resp => resolve(resp.data)).catch(error => reject(error));
});

const remove = <T>() => async (url: string, id: string): Promise<IDefaultResponse<T>> => new Promise((resolve, reject) => {
    api.delete(`${url}/${id}`).then(resp => resolve(resp.data)).catch(error => reject(error));
});

export { post, get, update, remove }