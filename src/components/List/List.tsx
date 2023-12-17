import { ReactElement, useEffect, useState } from "react";
import Task from "../Task/Task";
import './List.style.css'
import ListControl from "../ListControl/ListControl";
import Modal from "../Modal/Modal";
import Form from "../Form/Form";
import { updateTaskModalFieldMap } from "../Task/UpdateTaskModal.form";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { checkTask, deleteTask, updateTask } from "../../store/list/listSlice";
import { useLocation } from "react-router-dom";
import { getCurrentDirectory } from "../../util/Url/url";
import { setLocalTaskList } from "../../util/LocalStorage/localStorage";
import { UPDATE_TASK_MODAL } from "./List.config";
import { showModal } from "../../store/modal/modalSlice";

const List = (): ReactElement => {
  const currentPage = getCurrentDirectory(useLocation());

  const projectList = useAppSelector((state) => state.projects.value);
  const list = useAppSelector(state => state.list.value);
  const activeTask = useAppSelector(state => state.list.activeTask);
  const { [currentPage]: { sort = 'title', filter = 'all' } = {} } = useAppSelector(state => state.list.viewOptions);

  const [ formValues, setFormValues ] = useState<Record<string,string> | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLocalTaskList(list);
  }, [list]);

  const handleDelete = () => {
    dispatch(deleteTask(activeTask!));
    dispatch(showModal(''));
  };

  const handleCheck = (index: string) => {
    dispatch(checkTask(index))
  };

  const handleSubmit = ({title, description, dueDate, project, priority}: Record<string, string>) => {
    dispatch(updateTask({ title, description, dueDate, project, priority }))
    dispatch(showModal(''));
  }

  const fieldMap = updateTaskModalFieldMap({
    handleDelete
  }, projectList)

  const getTasks = () => {
    let sortedList = [...list];
    switch (sort) {
      case "dueDate": {
        sortedList = sortedList.sort((taskA, taskB) => new Date(taskA.dueDate).getTime() - new Date(taskB.dueDate).getTime());
        break;
      }

      default: {
        sortedList = sortedList.sort((taskA, taskB) => taskA.title.localeCompare(taskB.title));
        break;
      }
    }

    switch (filter) {
      case "completed": {
        sortedList = sortedList.filter((task) => task.completed);
        break;
      }

      case "pending": {
        sortedList = sortedList.filter((task) => !task.completed);
        break;
      }
    }

    sortedList = sortedList.filter((task) => task.project === currentPage);

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
        <ListControl />
      </div>
      <ul className="List">
        {
          getTasks().map(({ id, title, description, dueDate, completed, project, priority }) => (
              <Task
                key={id}
                taskId={id}
                title={title}
                description={description}
                dueDate={dueDate}
                completed={completed}
                project={project}
                priority={priority}
                handleCheck={handleCheck}
                setFormValues={setFormValues}
              />
          ))
        }
      </ul>
      <Modal
        id={UPDATE_TASK_MODAL}
        title="Edit Task"
      >
        <Form
          fieldMap={ fieldMap }
          formValues={ formValues }
          onSubmit={ handleSubmit }
          formTitle="EditTask"
        />
      </Modal>
    </div>
  )
}

export default List
