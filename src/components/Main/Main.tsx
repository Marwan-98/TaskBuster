import { Route, Routes } from "react-router-dom"
import List from "../List/List"
import './Main.style.css';
import { useContext, useState } from "react";
import { ShowNavContext } from "../../context/ShowNavContext";
import classNames from "classnames";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { taskModalFieldMap } from "./TaskModal.form";
import { ListContext } from "../../context/TaskListContext";
import { v4 as uuidv4 } from 'uuid';

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
      <button onClick={ () => setShowModal(true) }> Create a new task </button>
        <Modal
          title="Create New Task"
          showModal={ showModal }
          setShowModal={ setShowModal }
        >
          <Form
            fieldMap={ taskModalFieldMap }
            onSubmit={ createTask }
          />
        </Modal>
        <Routes>
          <Route path="/" element={ <List /> } />
          <Route path="/completed" element={ <List filterCompleted /> } />
        </Routes>
    </main>
  )
}

export default Main