import { getAll } from ".";
import { AppDispatch } from "..";

import { get } from "../../../api/GenericDataAccess";
import ISubject from "../../../core/Interfaces/Entities/Core/ISubject";

const BASE_URL = 'subjects/';

export const getAllAsync = (): any => async (dispatch: AppDispatch) => {
    const { data } = await get<ISubject[]>({ url: BASE_URL, protectedArea: true });
    dispatch(getAll(data));
}