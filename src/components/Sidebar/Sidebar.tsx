import { Link } from 'react-router-dom';
import InboxIcon from '../InboxIcon/InboxIcon';
import './Sidebar.style.css';
import classNames from "classnames";
import { useContext, useEffect, useState } from 'react';
import { ShowNavContext } from '../../context/ShowNavContext';
import Modal from '../Modal/Modal';
import { createProjectModalFieldMap } from './createProjectModal.form';
import Form from '../Form/Form';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addProject, updateProject } from '../../store/project/projectSlice';
import { setLocalProjectList } from '../../util/LocalStorage/localStorage';
import Button from '../Button/Button';
import AddIcon from '../AddIcon/AddIcon';
import Project from '../Project/Project';
import { v4 as uuidv4 } from 'uuid';
import { showModal } from '../../store/modal/modalSlice';
import { CREATE_PROJECT_MODAL, UPDATE_PROJECT_MODAL } from './Sidebar.config';

const Sidebar = () => {
  const projectList = useAppSelector((state) => state.projects.value);

  const { showNav } = useContext(ShowNavContext)!;
  const [ formValues, setFormValues ] = useState<Record<string,string> | null>(null);

  const dispatch = useAppDispatch();

  const className = classNames("SideBar", { showNav });

  const fieldMap = createProjectModalFieldMap();

  const handleSubmit = ({ title: name }: Record<string, string>) => {
    dispatch(addProject({
      id: uuidv4(),
      name,
    }));
    dispatch(showModal(""))
  }

  const handleProjectUpdate = ({ title: name }: Record<string, string>) => {
    dispatch(updateProject({
      name
    }));
    dispatch(showModal(""))
  }

  useEffect(() => {
    setLocalProjectList(projectList);
  }, [projectList])

  return (
    <>
      <aside className={ className } >
          <section>
              <nav>
                  <ul className="SideBar-List">
                      <li>
                          <Link to="/inbox">
                            <InboxIcon />
                            Inbox
                          </Link>
                      </li>
                  </ul>

                  <div className='Projects-Heading'>
                    <h3>Projects</h3>
                    <Button title='Add Task' onClick={ () => dispatch(showModal(CREATE_PROJECT_MODAL)) } icon={<AddIcon />} />
                  </div>

                  <ul className="SideBar-List" id='projects'>
                    { projectList.map((project) => (
                      <Project
                        key={project.id}
                        project={project}
                        setFormValues={ setFormValues }
                      />
                    )) }
                  </ul>
              </nav>
          </section>
      </aside>
      <Modal
        id={CREATE_PROJECT_MODAL}
        title="Create Project"
      >
        <Form
          fieldMap={ fieldMap }
          onSubmit={ handleSubmit }
          formTitle="createProject"
        />
      </Modal>
      <Modal
        id={UPDATE_PROJECT_MODAL}
        title="Update Project"
      >
        <Form
          fieldMap={ fieldMap }
          formValues={ formValues }
          onSubmit={ handleProjectUpdate }
          formTitle="updateProject"
        />
      </Modal>
    </>
  )
}

export default Sidebar
