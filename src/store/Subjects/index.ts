import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ISubject from '../../../core/Interfaces/Entities/Core/ISubject';

const initialState: Array<ISubject> = [];

const subject = createSlice({
    name: 'subject',
    initialState,

    reducers: {
        getAll(state, action: PayloadAction<ISubject[]>) {
            state = { ...action.payload }
        }
    }
})

export const { getAll } = subject.actions;
export default subject.reducer;