import { ReactElement, useContext } from 'react';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import './Header.style.css';
import { ShowNavContext, ShowNavContextType } from '../../context/ShowNavContext';

const Header = (): ReactElement => {
  const { showNav, setShowNav } = useContext(ShowNavContext) as ShowNavContextType;

  return (
    <header className="Header">
        <HamburgerIcon onClick={ () => setShowNav(!showNav) } />
        <h1>Task Buster</h1>
    </header>
  )
}

export default Header