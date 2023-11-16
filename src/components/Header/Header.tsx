import { useContext } from 'react';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import './Header.style.css';
import { ShowNavContext } from '../../context/ShowNavContext';

const Header = () => {
  const { showNav, setShowNav } = useContext(ShowNavContext)!;

  return (
    <header className="Header">
      <span onClick={ () => setShowNav(!showNav) }>
        <HamburgerIcon />
      </span>
        <h1>Task Buster</h1>
    </header>
  )
}

export default Header