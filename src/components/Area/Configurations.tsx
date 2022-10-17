import { ReactNode } from "react";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import apiAccess from "../../../api/GenericDataAccess";
import { onRequest, onRequestFinished } from "../../store/Loading";
import { AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";

import IErrorResponse from "../../../core/Interfaces/API/Responses/IErrorResponse";
import notificate from '../../../services/ToastrServices';
import IDefaultResponse from "../../../core/Interfaces/API/Responses/IDefaultResponse";

export default (props: { children: ReactNode }) => {
    const { isAuthenticated, token: { generatedToken } } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const onRequestInit = (request: AxiosRequestConfig<any>) => {
        request.headers = {
            ...(isAuthenticated && {
                Authorization: 'Bearer ' + generatedToken
            })
        };

        dispatch(onRequest());
        return request;
    }

    const onSuccessResponse = (response: AxiosResponse<IDefaultResponse<unknown>, any>) => {
        dispatch(onRequestFinished());
        return response;
    };

    const onFailedResponse = (error: AxiosError | unknown) => {
        try {
            const apiError = ((error as AxiosError).response?.data as IErrorResponse);
            const errors = Object.keys(apiError.data).length ? apiError.data : apiError.errorMessage;

            notificate(errors, "error");
            return error;
        } finally {
            console.error(error);
            dispatch(onRequestFinished())
        }
    }

    apiAccess.interceptors.request.use(onRequestInit);
    apiAccess.interceptors.response.use(onSuccessResponse, onFailedResponse);

    return <>{props.children}</>;
}