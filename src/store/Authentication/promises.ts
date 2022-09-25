import { post } from '../../../api/GenericDataAccess';
import { onRequest, onRequestFinished } from '../Loading';

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
        dispatch(onRequest())
        post<IUser, IAuthenticatedInfos>({ url: BASE_URL + "login" }, user).then(response => {
            dispatch(login(setDatas(response.data)))
        }).finally(() => dispatch(onRequestFinished()));
    }
}

export const signupAsync = (user: IUser): any => {
    return async function (dispatch: AppDispatch) {
        dispatch(onRequest());
        post<IUser, IAuthenticatedInfos>({ url: BASE_URL + "signup" }, user).then(response => {
            dispatch(signup(setDatas(response.data)));
        }).finally(() => dispatch(onRequestFinished()));
    }
}