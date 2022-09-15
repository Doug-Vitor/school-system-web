import { post } from '../../../api/GenericDataAccess';

import { login, logout, signup } from ".";
import { AppDispatch } from "..";

import IUser from "../../../core/Interfaces/Entities/IUser";
import IAuthenticatedInfos from '../../../core/Interfaces/Entities/IAuthenticatedInfos';

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
        const authenticatedInfos = (await post<IUser, IAuthenticatedInfos>(BASE_URL + 'login', user)).data;
        authenticatedInfos.isAuthenticated = true;
        dispatch(signup(authenticatedInfos));
    }
}

export const logoutAsync = (): any => {
    return async function (dispatch: AppDispatch) {
        
        dispatch(logout());
    }
}