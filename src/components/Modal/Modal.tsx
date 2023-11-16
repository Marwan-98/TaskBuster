import classNames from 'classnames'
import CloseIcon from '../CloseIcon/CloseIcon'
import './Modal.style.css'

const Modal = ({ children, title, showModal, setShowModal }: { children: JSX.Element, title: string, showModal: boolean, setShowModal: (state: boolean) => void }) => {
    const className = classNames("Modal", { showModal })

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