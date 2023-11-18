import { formatTimeLeft } from './Task.config';
import Button from '../Button/Button';
import TrashIcon from '../TrashIcon/TrashIcon';
import './Task.style.css';
import classNames from 'classnames';
import ClockIcon from '../ClockIcon/ClockIcon';

const Task = ({taskId, text, dueDate, completed, handleCheck, handleDelete}: { taskId: string, text: string, dueDate: string, completed: boolean, handleCheck: (index: string) => void, handleDelete: (index: string) => void }) => {
  const currentDate = new Date();
  const time_difference = new Date(dueDate).getTime() - currentDate.getTime();

  const { timeLeft, timeClassName } = formatTimeLeft(time_difference);

  const taskDateClassName = classNames("ListItem-TimeLeft", timeClassName)

  return (
    <li className="ListItem">
      <div className="ListItem-Details"  onClick={() => handleCheck(taskId)}>
        <input type="checkbox" id={`${taskId}`} name={ text } checked={ completed } disabled/>
        <span className="checkbox"></span>
        <label htmlFor={`${taskId}`}>{ text }</label>
        {
          (time_difference > 1 && !completed) &&
          <div className={ taskDateClassName }>
            <ClockIcon />
            <span>
              { timeLeft }
            </span>
          </div>
        }
      </div>
      <Button
        onClick={() => handleDelete(taskId)}
        title='Delete'
        icon={ <TrashIcon /> }
      />
    </li>
  )
}

export default Task