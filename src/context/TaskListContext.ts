import { createContext } from 'react';

export type Task = {
    id: string;
    text: string;
    completed: boolean;
}

interface ITaskListContext {
    list: Task[];
    setList: (task: Task[]) => void;
}

export const ListContext = createContext<ITaskListContext | null>(null);
