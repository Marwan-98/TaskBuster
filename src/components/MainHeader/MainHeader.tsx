import { ReactElement } from 'react';
import { MainHeaderProps } from './MainHeader.type';
import './MainHeader.style.css';

const MainHeader = ({ setShowModal, title }: MainHeaderProps): ReactElement => {
    return (
        <div className="Main-Header">
            <h2>{ title }</h2>
            <button onClick={ () => setShowModal(true) }> Create a new task </button>
        </div>
    )
}

export default MainHeader
