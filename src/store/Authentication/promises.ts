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

export const loginAsync = (user: IUser): any => async (dispatch: AppDispatch) => {
    const { data } = await post<IUser, IAuthenticatedInfos>({ url: BASE_URL + "login/" }, user);
    dispatch(login(setDatas(data)));
}

export const signupAsync = (user: IUser): any => async (dispatch: AppDispatch) => {
    const { data } = await post<IUser, IAuthenticatedInfos>({ url: BASE_URL + "signup/" }, user);
    dispatch(signup(setDatas(data)));
}