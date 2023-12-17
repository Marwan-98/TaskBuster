import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: '',
    title: '',
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        }
    }
});

export const { showModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
