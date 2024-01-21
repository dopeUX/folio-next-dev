import { configureStore } from "@reduxjs/toolkit";
import AppReducer from './AppSlice';

const store = configureStore({
    reducer: {
        AppReducer,
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>;
export type dispatch = typeof store.dispatch;
export default store;