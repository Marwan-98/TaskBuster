import { useContext, useState } from "react";
import { ListContext } from "../../context/TaskListContext";
import Task from "../Task/Task";
import './List.style.css'
import ListControl from "../ListControl/ListControl";

const List = () => {
  const { list, setList } = useContext(ListContext)!;
  const [ sortBy, setSortBy ] = useState('title');
  const [ filter, setFilter ] = useState('all');

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
          getTasks().map(({ id, title, dueDate, completed }) => (
              <Task
                key={id}
                taskId={id}
                text={title}
                dueDate={dueDate}
                completed={completed}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
              />
          ))
        }
      </ul>
    </div>
  )
}

export default List