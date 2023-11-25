import { createContext } from 'react';

export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
}

export type TaskListContextType = {
    list: Task[];
    setList: (task: Task[]) => void;
}

export const ListContext = createContext<TaskListContextType | null>(null);
