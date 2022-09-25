import { AppDispatch } from "..";
import { updateProfile } from ".";

import { get, post, update } from "../../../api/GenericDataAccess";

import ITeacher from "../../../core/Interfaces/Entities/Person/ITeacher";
import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import { getStorageUser, setStorageUser } from "../../../services/AuthServices";

const BASE_URL = 'teachers/';

const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

export const getAuthenticatedProfileAsync = (): any => async function (dispatch: AppDispatch) {
    dispatch(updateProfile((await get<ITeacher>({ url: 'teacher/', protectedArea: true })).data));
}

export const saveProfileAsync = (teacher: ITeacher): any => {
    return async function (dispatch: AppDispatch) {
        const data = teacher.id ? (await update<ITeacher, ITeacher>(requestPayload, teacher)).data : (await post<ITeacher, ITeacher>(requestPayload, teacher)).data;
        setStorageUser({ ...getStorageUser(), ownsTeacherProfile: true });
        dispatch(updateProfile(data));
    }
}