export interface ProjectType {
    id: string
    name: string
}

export type ProjectProps = {
    project: ProjectType,
    setFormValues: React.Dispatch<React.SetStateAction<null | Record<string,string>>>,
}

