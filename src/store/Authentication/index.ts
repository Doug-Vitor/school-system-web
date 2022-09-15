import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IAuthenticatedInfos from '../../../core/Interfaces/Entities/IAuthenticatedInfos';

const initialState: IAuthenticatedInfos = {
    isAuthenticated: false,
    authenticatedUserId: '',
    authenticatedUsername: '',
    expirationDate: new Date(),
    isAdmin: false,
    generatedToken: ''
}

const LOCAL_STORAGE_KEY = "user";
const setStorageUser = (authenticatedInfos: IAuthenticatedInfos) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(authenticatedInfos));
const getStorageUser = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) as IAuthenticatedInfos;
const removeStorageUser = () => localStorage.removeItem(LOCAL_STORAGE_KEY);

const auth = createSlice({
    name: 'auth',
    initialState,

    reducers: {
        login(state: any, action: PayloadAction<IAuthenticatedInfos>) {
            setStorageUser(action.payload);
            state = action.payload;
        },

        signup(state: any, action: PayloadAction<IAuthenticatedInfos>) {
            setStorageUser(action.payload);
            state.authenticated = action.payload;
        },

        logout(state: any) {
            removeStorageUser();
            state = initialState;
        }
    }
});

export { getStorageUser }
export const { login, signup, logout } = auth.actions;
export default auth.reducer;