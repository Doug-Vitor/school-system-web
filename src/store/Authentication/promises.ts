import { post } from '../../../api/GenericDataAccess';

import { login, signup } from ".";
import { AppDispatch } from "..";

import IUser from "../../../core/Interfaces/Entities/Authentication/IUser";
import IAuthenticatedInfos from '../../../core/Interfaces/API/IAuthenticatedInfos';

const BASE_URL = 'authentication/';

const setDatas = (infos: IAuthenticatedInfos) => {
    infos.isAuthenticated = true;
    return infos;
}

export const loginAsync = (user: IUser): any => {
    return async function (dispatch: AppDispatch) {
        const authenticatedInfos = (await post<IUser, IAuthenticatedInfos>({ url: BASE_URL + "login" }, user)).data;
        dispatch(login(setDatas(authenticatedInfos)));
    }
}

export const signupAsync = (user: IUser): any => {
    return async function (dispatch: AppDispatch) {
        const authenticatedInfos = (await post<IUser, IAuthenticatedInfos>({ url: BASE_URL + "signup" }, user)).data;
        dispatch(signup(setDatas(authenticatedInfos)));
    }
}