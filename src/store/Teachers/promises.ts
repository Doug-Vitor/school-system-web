import { AppDispatch } from "..";
import { updateProfile as updateProfileAction } from ".";

import { get, post, update } from "../../../api/GenericDataAccess";
import showMessage from '../../../services/ToastrServices'
import { onRequest, onRequestFinished } from "../Loading";

import ITeacher from "../../../core/Interfaces/Entities/Person/ITeacher";
import IDefaultRequestPayload from "../../../core/Interfaces/API/Requests/IDefaultRequestPayload";
import { getStorageUser, setStorageUser } from "../../../services/AuthServices";

const BASE_URL = 'teachers/';

const requestPayload: IDefaultRequestPayload = {
    url: BASE_URL,
    protectedArea: true
}

export const getAuthenticatedProfileAsync = (): any => async function (dispatch: AppDispatch) {
    dispatch(onRequest());
    get<ITeacher>({ url: 'teacher/', protectedArea: true }).then(response => {
        dispatch(updateProfileAction(response.data))
    }).finally(() => dispatch(onRequestFinished()));
}

export const saveProfileAsync = (teacher: ITeacher): any => {
    return async function (dispatch: AppDispatch) {
        try {
            dispatch(onRequest());
            const data = teacher.id ? await updateProfile(teacher) : await createProfile(teacher);
            showMessage("Perfil atualizado com sucesso. Obrigado!", "success")
            dispatch(updateProfileAction({ ...data, inEditMode: false }));
        } finally { dispatch(onRequestFinished()) }
    }
}

const createProfile = async (teacher: ITeacher) => {
    setStorageUser({ ...getStorageUser(), ownsTeacherProfile: true });
    return (await post<ITeacher, ITeacher>(requestPayload, teacher)).data
}
const updateProfile = async (teacher: ITeacher) => (await update<ITeacher, ITeacher>(requestPayload, teacher)).data