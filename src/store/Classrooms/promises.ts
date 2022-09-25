import { AppDispatch } from "..";
import { getAll } from ".";

import { get } from "../../../api/GenericDataAccess";
import { onRequest, onRequestFinished } from "../Loading";

import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import IClassroom from '../../../core/Interfaces/Entities/Core/IClassroom';

const BASE_URL = 'classrooms/';

const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

export const getAllAsync = (): any => {
    return async function (dispatch: AppDispatch) {
        dispatch(onRequest());
        get<IClassroom[]>(requestPayload).then(response => {
            dispatch(getAll(response.data));
        }).finally(() => dispatch(onRequestFinished()));
    }
}