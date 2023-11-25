export type TaskProps = {
    taskId: string,
    title: string,
    description: string,
    dueDate: string,
    completed: boolean,
    setActiveTask: (id: string) => void,
    setShowModal: (val: boolean) => void,
    setFormValues: React.Dispatch<React.SetStateAction<null | Record<string,string>>>,
    handleCheck: (index: string) => void
}
