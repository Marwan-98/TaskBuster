import { Link } from "react-router-dom";
import TrashIcon from "../TrashIcon/TrashIcon";
import EditIcon from "../EditIcon/EditIcon";
import { useAppDispatch } from "../../store/hooks";
import { deleteProject, selectProject } from "../../store/project/projectSlice";
import { ProjectProps } from "./Project.type";

const Project = ({setFormValues, setShowModal, project}: ProjectProps) => {
    const dispatch = useAppDispatch();

    const formValues = {
        title: project.name,
    }

    const handleProjectClick = () => {
        const { id } = project;

        setFormValues(formValues);
        dispatch(selectProject(id));
        setShowModal(true);
    }

    const handleDelete = () => {
        const { id } = project;

        dispatch(selectProject(id));
        dispatch(deleteProject(id));
    }

    return (
        <li>
            <Link to={`/projects/${project.name}`}>
                {project.name}
                <span>
                    <TrashIcon height={25} onClick={ handleDelete }/>
                    <EditIcon onClick={ handleProjectClick }/>
                </span>
            </Link>
        </li>
    )
}

export default Project