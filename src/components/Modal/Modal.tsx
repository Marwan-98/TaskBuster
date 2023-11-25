import classNames from 'classnames'
import CloseIcon from '../CloseIcon/CloseIcon'
import './Modal.style.css'
import { ModalProps } from './Modal.type'

const Modal = ({ children, title, showModal, setShowModal }: ModalProps): React.ReactElement | null => {
    const className = classNames("Modal", { showModal })

    if (!showModal) {
        return null;
    }

    return (
    <div className={ className }>
        <div className='Modal-Container'>
            <div className='Modal-Header'>
                <h2>{ title }</h2>
                <span onClick={ () => setShowModal(false) }>
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