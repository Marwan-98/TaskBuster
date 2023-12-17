import classNames from 'classnames'
import CloseIcon from '../CloseIcon/CloseIcon'
import './Modal.style.css'
import { ModalProps } from './Modal.type'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { showModal } from '../../store/modal/modalSlice'

const Modal = ({ id, children, title }: ModalProps): React.ReactElement | null => {
    const dispatch = useAppDispatch();
    const modalId = useAppSelector((state) => state.modal.id);

    if (id !== modalId) {
        return null;
    }

    const className = classNames("Modal", { showModal: id === modalId });

    const hideModal = () => {
        dispatch(showModal(''));
    }

    return (
    <div className={ className }>
        <div className='Modal-Container'>
            <div className='Modal-Header'>
                <h2>{ title }</h2>
                <span onClick={ hideModal }>
                    <CloseIcon />
                </span>
            </div>
            <div className='Modal-Body'>
                { children }
            </div>
        </div>
    </div>
  )
}

export default Modal