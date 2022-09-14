import { configureStore } from "@reduxjs/toolkit";

import auth from './Authentication/';

const store = configureStore({
    reducer: {
        auth
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;