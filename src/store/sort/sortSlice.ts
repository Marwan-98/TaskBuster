import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SortState {
    value: string
}

const initialState: SortState = {
    value: 'title'
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        selectSort: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
})

export const { selectSort } = sortSlice.actions;

export const sortReducer = sortSlice.reducer;
