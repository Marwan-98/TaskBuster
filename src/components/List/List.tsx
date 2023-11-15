import { useContext } from "react";
import { ListContext } from "../../context/TaskListContext";
import Task from "../Task/Task";
import './List.style.css'

const List = () => {
  const { list, setList } = useContext(ListContext)!;

  const handleDelete = (index: string) => {
    setList(list.filter((task) => task.id !== index));
  };

  const handleCheck = (index: string) => {
    const updatedList = [...list];
    const taskToUpdate = updatedList.find((task) => task.id === index);

    if (taskToUpdate) {
      taskToUpdate.completed = !taskToUpdate.completed;
      setList(updatedList);
    }
  };

  return (
    <ul className="List">
      {
        list.map(({ id, text, completed }, idx) => (
            <Task
              key={idx}
              taskId={ id }
              text={text}
              completed={completed}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
        ))
      }
    </ul>
  )
}

export default List