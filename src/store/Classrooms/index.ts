import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IClassroom from "../../../core/Interfaces/Entities/Core/IClassroom";

const initialState: Array<IClassroom> = [];

const classroom = createSlice({
    name: 'classroom',
    initialState,

    reducers: {
        getAll(state, action: PayloadAction<IClassroom[]>) {
            state = { ...action.payload }
        }
    }
})

export const { getAll } = classroom.actions;
export default classroom.reducer;