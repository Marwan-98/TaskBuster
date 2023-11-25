import { Route, Routes } from "react-router-dom"
import List from "../List/List"
import './Main.style.css';
import { useContext, useState } from "react";
import { ShowNavContext } from "../../context/ShowNavContext";
import classNames from "classnames";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { createTaskModalFieldMap } from "./CreateTaskModal.form";
import { ListContext } from "../../context/TaskListContext";
import { v4 as uuidv4 } from 'uuid';
import MainHeader from "../MainHeader/MainHeader";

const Main = () => {
  const { showNav } = useContext(ShowNavContext)!;
  const { list, setList } = useContext(ListContext)!;
  const [ showModal, setShowModal ] = useState(false);

  const className = classNames("Main", { showNav: !showNav });

  const createTask = ({title, description, dueDate}: Record<string, string>) => {
    setList([...list, {
      id: uuidv4(),
      title,
      description,
      dueDate,
      completed: false,
    }]);
    setShowModal(false);
  }

  return (
    <main className={ className }>
      <Routes>
        <Route path="/" element={ <MainHeader setShowModal={ setShowModal } title="Inbox" /> } />
        <Route path="/completed" element={ <MainHeader setShowModal={ setShowModal } title="Completed" /> } />
      </Routes>
      <Modal
        title="Create New Task"
        showModal={ showModal }
        setShowModal={ setShowModal }
      >
        <Form
          fieldMap={ createTaskModalFieldMap() }
          onSubmit={ createTask }
          formTitle="CreateTask"
        />
      </Modal>
      <Routes>
        <Route path="/" element={ <List /> } />
      </Routes>
    </main>
  )
}

export default Main