import { getAll } from ".";
import { AppDispatch } from "..";

import { get } from "../../../api/GenericDataAccess";
import { onRequest, onRequestFinished } from "../Loading";

import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import ISubject from "../../../core/Interfaces/Entities/Core/ISubject";

const BASE_URL = 'subjects/';

const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

export const getAllAsync = (): any => {
    return async function (dispatch: AppDispatch) {
        dispatch(onRequest());
        get<ISubject[]>(requestPayload).then(response => {
            dispatch(getAll(response.data))
        }).finally(() => dispatch(onRequestFinished()));
    }
}