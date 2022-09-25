import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoading: false }

const loading = createSlice({
    name: 'loading',
    initialState,

    reducers: {
        onRequest(state) { state.isLoading = true },
        onRequestFinished(state) { state.isLoading = false }
    }
})

export const { onRequest, onRequestFinished } = loading.actions;
export default loading.reducer;