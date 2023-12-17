import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { ProjectType } from "../../components/Project/Project.type";

interface projectState {
    value: ProjectType[],
    activeProject: string | null,
}

const initialState: projectState = {
    value: localStorage.getItem('projectList') ? JSON.parse(localStorage.getItem('projectList')!) : [],
    activeProject: null,
}

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action: PayloadAction<ProjectType>) => {
            const { payload: title } = action;

            state.value = [...state.value, title]
        },
        selectProject: (state, action: PayloadAction<string>) => {
            const { payload: id } = action;

            state.activeProject = id
        },
        updateProject: (state, action: PayloadAction<Omit<ProjectType, 'id'>>) => {
            const {
                payload: {
                    name,
                }
            } = action;


            state.value = state.value.map((project) => {
                const { activeProject } = state;
                const { id } = project;

                if (id === activeProject) {
                    return {
                        ...project,
                        name,
                    }
                }

                return project;
            })
        },
        deleteProject: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(({ id }) => id !== action.payload);
        }
    }
})

export const { addProject, updateProject, selectProject, deleteProject } = projectSlice.actions;
export const projectReducer = projectSlice.reducer;
