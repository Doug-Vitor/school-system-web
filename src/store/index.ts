import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import auth from './Authentication/';
import teachers from "./Teachers";
import subject from './Subjects'
import classroom from './Classrooms'

const store = configureStore({
    reducer: {
        auth,
        teachers,
        subject,
        classroom
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;