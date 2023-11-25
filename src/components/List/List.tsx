import { useContext, useState } from "react";
import { ListContext } from "../../context/TaskListContext";
import Task from "../Task/Task";
import './List.style.css'
import ListControl from "../ListControl/ListControl";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { updateTaskModalFieldMap } from "../Task/UpdateTaskModal.form";

const List = () => {
  const { list, setList } = useContext(ListContext)!;
  const [ sortBy, setSortBy ] = useState('title');
  const [ filter, setFilter ] = useState('all');
  const [ showModal, setShowModal ] = useState(false);
  const [ formValues, setFormValues ] = useState<Record<string,string> | null>(null);
  const [ activeTask, setActiveTask ] = useState<string | null>(null);

  const fieldMap = updateTaskModalFieldMap({
    handleDelete: () => handleDelete(activeTask!)
  })

  const handleDelete = (index: string) => {
    setList(list.filter((task) => task.id !== index));
    setShowModal(false);
  };

  const handleCheck = (index: string) => {
    const updatedList = [...list];
    const taskToUpdate = updatedList.find((task) => task.id === index);

    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      setList(updatedList);
    }
  };

  const updateTask = ({title, description, dueDate}: Record<string, string>) => {
    const updatedList = list.map((task) => {
      if (task.id === activeTask) {
        return {
          ...task,
          title,
          description,
          dueDate
        }
      }

      return task;
    })

    setList(updatedList);
    setShowModal(false);
  }

  const getTasks = () => {
    let sortedList = list;
    switch (sortBy) {
      case "dueDate": {
        sortedList = list.sort((taskA, taskB) => new Date(taskA.dueDate).getTime() - new Date(taskB.dueDate).getTime());
        break;
      }

      default: {
        sortedList = list.sort((taskA, taskB) => taskA.title.localeCompare(taskB.title));
        break;
      }
    }

    switch (filter) {
      case "completed": {
        sortedList = list.filter((task) => task.completed);
        break;
      }

      case "pending": {
        sortedList = list.filter((task) => !task.completed);
        break;
      }
    }

    return sortedList;
  }

  return (
    <div>
      <div className="List-Details">
        <div className="List-Details-Heading">
          <h2>{ filter }</h2>
          <span>
            { getTasks().length }
          </span>
        </div>
        <ListControl sortBy={sortBy} setSortBy={setSortBy} filter={filter} setFilter={setFilter} />
      </div>
      <ul className="List">
        {
          getTasks().map(({ id, title, description, dueDate, completed }) => (
              <Task
                key={id}
                taskId={id}
                title={title}
                description={description}
                dueDate={dueDate}
                completed={completed}
                handleCheck={handleCheck}
                setShowModal={setShowModal}
                setFormValues={setFormValues}
                setActiveTask={setActiveTask}
              />
          ))
        }
      </ul>
      <Modal
        title="Edit Task"
        showModal={ showModal }
        setShowModal={ setShowModal }
      >
        <Form
          fieldMap={ fieldMap }
          formValues={ formValues }
          onSubmit={ updateTask }
          formTitle="EditTask"
        />
      </Modal>
    </div>
  )
}

export default List