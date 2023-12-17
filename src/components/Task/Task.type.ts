export type TaskProps = {
    taskId: string,
    title: string,
    description: string,
    dueDate: string,
    completed: boolean,
    project: string,
    setShowModal: (val: boolean) => void,
    setFormValues: React.Dispatch<React.SetStateAction<null | Record<string,string>>>,
    handleCheck: (index: string) => void
}

export type Task = {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    completed: boolean;
    project: string
}
