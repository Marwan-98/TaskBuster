import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface projectState {
    value: string[]
}

const initialState: projectState = {
    value: localStorage.getItem('projectList') ? JSON.parse(localStorage.getItem('projectList')!) : [],
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<string>) => {
            const { payload: title } = action;

            state.value = [...state.value, title]
        }
    }
})

export const { addProject } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
