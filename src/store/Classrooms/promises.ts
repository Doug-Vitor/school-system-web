import { AppDispatch } from "..";
import { getAll } from ".";

import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import { get } from "../../../api/GenericDataAccess";

import IClassroom from '../../../core/Interfaces/Entities/Core/IClassroom';

const BASE_URL = 'classrooms/';

const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

export const getAllAsync = (): any => {
    return async function (dispatch: AppDispatch) {
        dispatch(getAll((await get<IClassroom[]>(requestPayload)).data));
    }
}