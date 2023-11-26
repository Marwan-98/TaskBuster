import { configureStore } from "@reduxjs/toolkit";
import { listReducer } from "./list/listSlice";
import { filterReducer } from "./filter/filterSlice";
import { sortReducer } from "./sort/sortSlice";

export const store = configureStore({
    reducer: {
        list: listReducer,
        filter: filterReducer,
        sort: sortReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
