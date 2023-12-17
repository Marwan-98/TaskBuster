import { ReactElement } from 'react';
import { MainHeaderProps } from './MainHeader.type';
import './MainHeader.style.css';
import { useAppDispatch } from '../../store/hooks';
import { showModal } from '../../store/modal/modalSlice';
import { CREATE_TASK_MODAL } from './MainHeader.config';

const MainHeader = ({ title }: MainHeaderProps): ReactElement => {
    const dispatch = useAppDispatch();

    return (
        <div className="Main-Header">
            <h2>{ title }</h2>
            <button onClick={ () => dispatch(showModal(CREATE_TASK_MODAL)) }> Create a new task </button>
        </div>
    )
}

export default MainHeader
