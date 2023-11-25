import { formatTimeLeft } from './Task.config';
import './Task.style.css';
import classNames from 'classnames';
import ClockIcon from '../ClockIcon/ClockIcon';

const Task = ({taskId, title, description, dueDate, completed, handleCheck, setActiveTask, setShowModal, setFormValues}:
  { taskId: string,
    title: string,
    description: string,
    dueDate: string,
    completed: boolean,
    setActiveTask: (id: string) => void,
    setShowModal: (val: boolean) => void,
    setFormValues: React.Dispatch<React.SetStateAction<null | Record<string,string>>>,
    handleCheck: (index: string) => void
  }) => {
  const currentDate = new Date();
  const time_difference = new Date(dueDate).getTime() - currentDate.getTime();

  const { timeLeft, timeClassName } = formatTimeLeft(time_difference, completed);

  const taskDateClassName = classNames("ListItem-TimeLeft", timeClassName)

  const formValues = {
    title,
    description,
    dueDate,
  }

  const handleTaskClick = (taskId: string) => {
    setFormValues(formValues);
    setShowModal(true);
    setActiveTask(taskId);
  }

  return (
    <li className="ListItem">
      <div className="ListItem-Details">
        <input type="checkbox" id={`${taskId}`} name={ title } checked={ completed } disabled />
        <span className="checkbox" onClick={() => handleCheck(taskId)}></span>
        <label htmlFor={`${taskId}`} onClick={() => handleTaskClick(taskId)}>{ title }</label>
        {
          <div className={ taskDateClassName }>
            <ClockIcon />
            <span>
              { timeLeft }
            </span>
          </div>
        }
      </div>
    </li>
  )
}

export default Task