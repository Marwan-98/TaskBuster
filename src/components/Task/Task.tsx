import { formatTimeLeft } from './Task.config';
import './Task.style.css';
import classNames from 'classnames';
import ClockIcon from '../ClockIcon/ClockIcon';
import { TaskProps } from './Task.type';
import { useAppDispatch } from '../../store/hooks';
import { selectTask } from '../../store/list/listSlice';
import { showModal } from '../../store/modal/modalSlice';
import { UPDATE_TASK_MODAL } from '../List/List.config';

const Task = (
  {
    taskId,
    title,
    description,
    dueDate,
    completed,
    project,
    handleCheck,
    setFormValues
  }: TaskProps
  ) => {
  const dispatch = useAppDispatch();
  const currentDate = new Date();
  const time_difference = new Date(dueDate).getTime() - currentDate.getTime();

  const { timeLeft, timeClassName } = formatTimeLeft(time_difference, completed);

  const taskDateClassName = classNames("ListItem-TimeLeft", timeClassName)

  const formValues = {
    title,
    description,
    dueDate,
    project
  }

  const handleTaskClick = (taskId: string) => {
    setFormValues(formValues);
    dispatch(showModal(UPDATE_TASK_MODAL));
    dispatch(selectTask(taskId));
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