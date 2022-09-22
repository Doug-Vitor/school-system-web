import { getAll } from ".";
import { AppDispatch } from "..";
import { get } from "../../../api/GenericDataAccess";
import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import ISubject from "../../../core/Interfaces/Entities/Core/ISubject";

const BASE_URL = 'subjects/';

const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

export const getAllAsync = (): any => {
    return async function (dispatch: AppDispatch) {
        dispatch(getAll((await get<ISubject[]>(requestPayload)).data));
    }
}