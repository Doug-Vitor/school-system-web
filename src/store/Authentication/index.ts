import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IAuthenticatedInfos from '../../../core/Interfaces/API/IAuthenticatedInfos';

import { getStorageUser, onAuthSuccess, onLogout } from '../../../services/AuthServices';

const initialState: IAuthenticatedInfos = {
    isAuthenticated: false,
    authenticatedUserId: '',
    authenticatedUsername: '',
    ownsTeacherProfile: false,
    isAdmin: false,
    token: {
        generatedToken: '',
        expirationDate: new Date(),
    }
}

const auth = createSlice({
    name: 'auth',
    initialState: getStorageUser() ?? initialState,

    reducers: {
        login(state: any, action: PayloadAction<IAuthenticatedInfos>) {
            state = action.payload;
            onAuthSuccess(action.payload);
        },

        signup(state: any, action: PayloadAction<IAuthenticatedInfos>) {
            state = action.payload;
            onAuthSuccess(action.payload);
        },

        logout(state: any) {
            state = initialState;
            onLogout();
        }
    }
});

export const { login, signup, logout } = auth.actions;
export default auth.reducer;