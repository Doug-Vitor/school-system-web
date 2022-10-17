import axios from 'axios';

import IDefaultRequestPayload from '../core/Interfaces/API/Requests/IDefaultRequestPayload';
import IDefaultResponse from '../core/Interfaces/API/Responses/IDefaultResponse';

const api = axios.create({
    baseURL: "https://school-system-server.herokuapp.com/api/"
});

const getUrl = (requestPayload: IDefaultRequestPayload) => {
    const { url, protectedArea } = requestPayload;
    return protectedArea ? 'protected/' + url : url;
}

const post = async <TBody, TResponse>(requestPayload: IDefaultRequestPayload, object: TBody): Promise<IDefaultResponse<TResponse>> => (await api.post(getUrl(requestPayload), object)).data;
const get = async <TResponse>(requestPayload: IDefaultRequestPayload, id?: string): Promise<IDefaultResponse<TResponse>> => (await api.get(getUrl(requestPayload) + (id ?? ''))).data;
const update = async <TBody, TResponse>(requestPayload: IDefaultRequestPayload, object: TBody, id?: string): Promise<IDefaultResponse<TResponse>> => (await api.patch(getUrl(requestPayload) + (id ?? ''), object)).data;
const remove = async <TResponse>(requestPayload: IDefaultRequestPayload, id: string): Promise<IDefaultResponse<TResponse>> => (await api.delete(getUrl(requestPayload) + (id ?? ''))).data;

export default api;
export { post, get, update, remove }