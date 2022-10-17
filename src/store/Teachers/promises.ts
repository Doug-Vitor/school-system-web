import { AppDispatch } from "..";
import { updateProfile as updateProfileAction } from ".";

import { get, post, update } from "../../../api/GenericDataAccess";
import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import showMessage from '../../../services/ToastrServices';

import ITeacher from "../../../core/Interfaces/Entities/Person/ITeacher";
import { getStorageUser, setStorageUser } from "../../../services/AuthServices";

const BASE_URL = 'teachers/';
const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

const onSuccessUpdate = () => {
    showMessage("Perfil atualizado com sucesso. Obrigado!", "success");
    setStorageUser({ ...getStorageUser(), ownsTeacherProfile: true });
}

const createProfile = async (teacher: ITeacher) => await post<ITeacher, ITeacher>(requestPayload, teacher);
const updateProfile = async (teacher: ITeacher) => await update<ITeacher, ITeacher>(requestPayload, teacher);

export const getAuthenticatedProfileAsync = (): any => async function (dispatch: AppDispatch) {
    const { data } = await get<ITeacher>({ url: 'teacher/', protectedArea: true });
    dispatch(updateProfileAction(data));
}

export const saveProfileAsync = (teacher: ITeacher): any => async (dispatch: AppDispatch) => {
    const { data, statusCode } = await (teacher.id ? updateProfile(teacher) : createProfile(teacher));

    if (statusCode >= 200 && statusCode <= 299) {
        onSuccessUpdate();
        dispatch(updateProfileAction({ ...data, inEditMode: false }));
    }
}