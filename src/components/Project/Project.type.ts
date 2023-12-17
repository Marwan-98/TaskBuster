export interface ProjectType {
    id: string
    name: string
}

export type ProjectProps = {
    project: ProjectType,
    setShowModal: (val: boolean) => void,
    setFormValues: React.Dispatch<React.SetStateAction<null | Record<string,string>>>,
}

