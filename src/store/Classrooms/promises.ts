import { AppDispatch } from "..";
import { getAll } from ".";

import { get } from "../../../api/GenericDataAccess";
import IClassroom from '../../../core/Interfaces/Entities/Core/IClassroom';

const BASE_URL = 'classrooms/';

export const getAllAsync = (): any => async (dispatch: AppDispatch) => {
    const { data } = await get<IClassroom[]>({ url: BASE_URL, protectedArea: true });
    dispatch(getAll(data));
}