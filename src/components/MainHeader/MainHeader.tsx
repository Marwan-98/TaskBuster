import './MainHeader.style.css';

const MainHeader = ({ setShowModal, title }: { setShowModal: (state: boolean) => void, title: string }) => {
    return (
        <div className="Main-Header">
            <h2>{ title }</h2>
            <button onClick={ () => setShowModal(true) }> Create a new task </button>
        </div>
    )
}

export default MainHeader
