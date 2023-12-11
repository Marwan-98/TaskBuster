import { Link } from 'react-router-dom';
import DartIcon from '../DartIcon/DartIcon';
import InboxIcon from '../InboxIcon/InboxIcon';
import './Sidebar.style.css';
import classNames from "classnames";
import { useContext, useEffect, useState } from 'react';
import { ShowNavContext } from '../../context/ShowNavContext';
import Modal from '../Modal/Modal';
import { createProjectModalFieldMap } from './createProjectModal.form';
import Form from '../Form/Form';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addProject } from '../../store/project/projectSlice';
import { setLocalProjectList } from '../../util/LocalStorage/localStorage';
import Button from '../Button/Button';
import AddIcon from '../AddIcon/AddIcon';

const Sidebar = () => {
  const projectList = useAppSelector((state) => state.projects.value);

  const { showNav } = useContext(ShowNavContext)!;
  const [ showModal, setShowModal ] = useState(false);

  const dispatch = useAppDispatch();

  const className = classNames("SideBar", { showNav });

  const fieldMap = createProjectModalFieldMap();

  const handleSubmit = ({ title }: Record<string, string>) => {
    dispatch(addProject(title));
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
                    <li>
                        <Link to="/completed">
                          <DartIcon />
                          Completed
                        </Link>
                    </li>
                </ul>

                <div className='Projects-Heading'>
                  <h3>Projects</h3>
                  <Button title='Add Task' onClick={ () => setShowModal(true) } icon={<AddIcon />} />
                </div>

                <ul className="SideBar-List">
                  { projectList.map((project, idx) => (
                    <li key={idx}>
                      <Link to={`/${project}`}>{project}</Link>
                    </li>
                  )) }
                </ul>
            </nav>
        </section>
    </aside>
    <Modal
          title="Create Project"
          showModal={ showModal }
          setShowModal={ setShowModal }
        >
        <Form
          fieldMap={ fieldMap }
          onSubmit={ handleSubmit }
          formTitle="createProject"
        />
      </Modal>
    </>
  )
}

export default Sidebar
