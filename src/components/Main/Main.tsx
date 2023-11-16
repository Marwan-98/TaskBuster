import { Route, Routes } from "react-router-dom"
import TaskInput from "../TaskInput/TaskInput"
import List from "../List/List"
import './Main.style.css';
import { useContext } from "react";
import { ShowNavContext } from "../../context/ShowNavContext";
import classNames from "classnames";

const Main = () => {
  const { showNav } = useContext(ShowNavContext)!;

  const className = classNames("Main", { showNav: !showNav });

  return (
    <main className={ className }>
        <TaskInput />
        <Routes>
          <Route path="/" element={ <List /> } />
          <Route path="/completed" element={ <List filterCompleted /> } />
        </Routes>
    </main>
  )
}

export default Main