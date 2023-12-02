import { Link } from 'react-router-dom';
import DartIcon from '../DartIcon/DartIcon';
import InboxIcon from '../InboxIcon/InboxIcon';
import './Sidebar.style.css';
import classNames from "classnames";
import { useContext } from 'react';
import { ShowNavContext } from '../../context/ShowNavContext';

const Sidebar = () => {
  const { showNav } = useContext(ShowNavContext)!;

    const className = classNames("SideBar", { showNav });

  return (
    <aside className={ className } >
        <section>
            <nav>
                <ul className="SideBar-List">
                    <li>
                        <InboxIcon />
                        <Link to="/inbox">Inbox</Link>
                    </li>
                    <li>
                        <DartIcon />
                        <Link to="/completed">Completed</Link>
                    </li>
                </ul>
            </nav>
        </section>
    </aside>
  )
}

export default Sidebar
