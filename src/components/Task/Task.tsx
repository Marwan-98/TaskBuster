import Button from '../Button/Button';
import TrashIcon from '../TrashIcon/TrashIcon';
import './Task.style.css';

const Task = ({taskId, text, completed, handleCheck, handleDelete}: { taskId: string, text: string, completed: boolean, handleCheck: (index: string) => void, handleDelete: (index: string) => void }) => {
  return (
    <li className="List-Item">
        <div className="List-Item-Details" onClick={() => handleCheck(taskId)}>
            <input type="checkbox" id={`${taskId}`} name={ text } checked={ completed } disabled/>
            <span className="checkbox"></span>
            <label htmlFor={`${taskId}`}>{ text }</label>
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