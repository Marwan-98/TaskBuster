import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FilterState {
    value: string
}

const initialState: FilterState = {
    value: 'all'
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        selectFilter: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
});

export const { selectFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;