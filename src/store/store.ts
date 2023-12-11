import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./list/listSlice";
import { projectReducer } from "./project/projectSlice";

export const store = configureStore({
    reducer: {
        list: listReducer,
        projects: projectReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
