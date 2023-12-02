import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Task } from "../../components/Task/Task.type";
import { viewOptionsType } from "../../util/LocalStorage/localStorage.config";
interface ListState {
    value: Task[]
    activeTask: string | null,
    viewOptions: Record<string, viewOptionsType>
}

const initialState: ListState = {
    value: localStorage.getItem('taskList') ? JSON.parse(localStorage.getItem('taskList')!) : [],
    activeTask: null,
    viewOptions: localStorage.getItem('viewOptions') ? JSON.parse(localStorage.getItem('viewOptions')!) : {},
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
        },
        updateViewOptions: (state, action: PayloadAction<Record<string, string>>) => {
            const { currentPage, option, value } = action.payload;

            if (!option && !value) {
                state.viewOptions = {
                    ...state.viewOptions,
                    [currentPage]: {
                        filter: 'all',
                        sort: 'title'
                    }
                };

                return;
            }

            state.viewOptions = {
                ...state.viewOptions,
                [currentPage]: {
                    ...state.viewOptions[currentPage],
                    [option]: value
                }
            };
        }
    }
})

export const { addTask, deleteTask, checkTask, updateTask, selectTask, updateViewOptions } = listSlice.actions;

export const listReducer = listSlice.reducer;
