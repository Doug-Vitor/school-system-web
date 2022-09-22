import { post } from '../../../api/GenericDataAccess';

import { login, signup } from ".";
import { AppDispatch } from "..";

import IUser from "../../../core/Interfaces/Entities/Authentication/IUser";
import IAuthenticatedInfos from '../../../core/Interfaces/API/IAuthenticatedInfos';

const BASE_URL = 'authentication/'

export const loginAsync = (user: IUser): any => {
    return async function (dispatch: AppDispatch) {
        const authenticatedInfos = (await post<IUser, IAuthenticatedInfos>(BASE_URL + 'login', user)).data;
        authenticatedInfos.isAuthenticated = true;
        dispatch(login(authenticatedInfos));
    }
}

export const signupAsync = (user: IUser): any => {
    return async function (dispatch: AppDispatch) {
        const authenticatedInfos = (await post<IUser, IAuthenticatedInfos>(BASE_URL + 'signup', user)).data;
        authenticatedInfos.isAuthenticated = true;
        dispatch(signup(authenticatedInfos));
    }
}