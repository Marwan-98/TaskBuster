import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import './Main.style.css';
import { ReactElement, useContext, useState } from "react";
import { ShowNavContext, ShowNavContextType } from "../../context/ShowNavContext";
import classNames from "classnames";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { createTaskModalFieldMap } from "./CreateTaskModal.form";
import { v4 as uuidv4 } from 'uuid';
import MainHeader from "../MainHeader/MainHeader";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addTask } from "../../store/list/listSlice";
import { getCurrentDirectory } from "../../util/Url/url";
import List from "../List/List";

const Main = (): ReactElement => {
  const projectList = useAppSelector((state) => state.projects.value);
  const { showNav } = useContext(ShowNavContext) as ShowNavContextType;
  const dispatch = useAppDispatch();
  const [ showModal, setShowModal ] = useState(false);
  const currentPage = getCurrentDirectory(useLocation());

  const className = classNames("Main", { showNav: !showNav });

  const createTask = ({title, description, dueDate, project}: Record<string, string>) => {
    dispatch(addTask({
      id: uuidv4(),
      title,
      description,
      dueDate,
      completed: false,
      project,
    }));
    setShowModal(false);
  }

  const findProject = [{ name: 'inbox' }, ...projectList].find((project) => project.name === currentPage);

  if (!findProject) {
    return (
      <main className={ className }>
        <h1>No Project Found!</h1>
      </main>
    );
  }

  return (
    <main className={ className }>
      <MainHeader setShowModal={ setShowModal } title={ currentPage } />
      <Routes>
        <Route path="*" element={ <Navigate to="/inbox" /> } />
        <Route path="/inbox" element={ <List /> } />
        <Route path="/completed" element={ <List /> } />
        <Route path="/projects">
          <Route path=":id" element={<List />} />
        </Route>
      </Routes>
      <Modal
        title="Create New Task"
        showModal={ showModal }
        setShowModal={ setShowModal }
      >
        <Form
          fieldMap={ createTaskModalFieldMap({projectList}) }
          onSubmit={ createTask }
          formTitle="CreateTask"
        />
      </Modal>
    </main>
  )
}

export default Main
