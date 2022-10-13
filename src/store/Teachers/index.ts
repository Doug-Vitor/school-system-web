import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ITeacher from '../../../core/Interfaces/Entities/Person/ITeacher';
import { getStorageUser } from '../../../services/AuthServices';

export interface IUpdateArrayPayload {
    index: number
    key: 'subjectsIds' | 'classroomsIds'
    value?: string
}

const initialState = {
    profile: <ITeacher>{
        id: '',
        name: '',
        birthdate: new Date(),
        phoneNumber: '',
        realId: '',
        zipCode: '',
        subjectsIds: [''],
        classroomsIds: [''],
        userId: getStorageUser()?.authenticatedUserId,
        inEditMode: false
    },
    profiles: <Array<ITeacher>>[]
}

const auth = createSlice({
    name: 'teachers',
    initialState,

    reducers: {
        updateProfile(state, action: PayloadAction<ITeacher>) {
            state.profile = { ...action.payload }
        },

        incrementArray(state, action: PayloadAction<IUpdateArrayPayload>) {
            state.profile[action.payload.key].push('');
        },

        decrementArray(state, action: PayloadAction<IUpdateArrayPayload>) {
            const { index, key } = action.payload;
            state.profile[key].splice(index, 1);
        },

        updateArray(state, action: PayloadAction<IUpdateArrayPayload>) {
            const { index, key, value } = action.payload;
            if (value) state.profile[key][index] = value;
        },

        resetArray(state, action: PayloadAction<IUpdateArrayPayload>) {
            state.profile[action.payload.key] = [];
        }
    }
});

export const { updateProfile, incrementArray, decrementArray, updateArray, resetArray } = auth.actions;
export default auth.reducer;