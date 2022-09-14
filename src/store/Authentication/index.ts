import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: {
        authenticated: false
    },

    reducers: {
        login(state: any) {
            state.authenticated = true;
        },

        signup(state: any) {
            state.authenticated = true;
        },

        logout(state: any) {
            state.authenticated = false;
        }
    }
});

export const { login, signup, logout } = auth.actions;
export default auth.reducer;