import { useContext, useState } from "react";
import { ListContext } from "../../context/TaskListContext";
import Button from "../Button/Button"
import Input from "../Input/Input"
import { v4 as uuidv4 } from 'uuid';
import './TaskInput.style.css'

const TaskInput = () => {
  const { list, setList } = useContext(ListContext)!;
  const [ text, setText ] = useState("");

  const createTask = (text: string) => {
    if (text) {
      setList([...list, {
        id: uuidv4(),
        text: text,
        completed: false,
      }]);

      setText("");
    }
  }

  return (
    <div className="Task-Input">
        <Input
          text={ text }
          setText={ setText }
        />
        <Button
          onClick={() => createTask(text)}
          title="Add"
        />
    </div>
  )
}

export default TaskInput