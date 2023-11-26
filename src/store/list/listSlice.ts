import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../components/Task/Task.type";

interface ListState {
    value: Task[]
    activeTask: string | null
}

const initialState: ListState = {
    value: [],
    activeTask: null,
}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            const { payload: {
                id,
                title,
                description,
                dueDate,
                completed = false
            } } = action;

            state.value = [
                ...state.value,
                {
                    id,
                    title,
                    description,
                    dueDate,
                    completed
                }
            ]
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter((task) => task.id !== action.payload);
        },
        checkTask: (state, action: PayloadAction<string>) => {
            state.value = state.value.map((task) => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }

                return task
            });
        },
        updateTask: (state, action: PayloadAction<Omit<Task, 'id' | 'completed'>>) => {
            const { payload: {
                title,
                description,
                dueDate,
            } } = action;

            state.value = state.value.map((task) => {
                if (task.id === state.activeTask) {
                    return {
                        ...task,
                        title,
                        description,
                        dueDate
                    }
                }

                return task
            });
        },
        selectTask: (state, action: PayloadAction<string>) => {
            state.activeTask = action.payload;
        }
    }
})

export const { addTask, deleteTask, checkTask, updateTask, selectTask } = listSlice.actions;

export const listReducer = listSlice.reducer;
