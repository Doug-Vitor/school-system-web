import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ITeacher from '../../../core/Interfaces/Entities/Person/ITeacher';
import { getStorageUser, onAuthSuccess, onLogout } from '../../../services/AuthServices';

const initialState = {
    profile: <ITeacher>{
        id: '',
        name: '',
        birthdate: new Date(),
        phoneNumber: '',
        realId: '',
        zipCode: '',
        subjectsIds: [],
        classroomsIds: [],
        userId: getStorageUser().authenticatedUserId,
    },
    profiles: <Array<ITeacher>>[]
}

const auth = createSlice({
    name: 'teachers',
    initialState,

    reducers: {
        updateProfile(state, action: PayloadAction<ITeacher>) {
            state.profile = { ...action.payload }
        }
    }
});

export const { updateProfile } = auth.actions;
export default auth.reducer;