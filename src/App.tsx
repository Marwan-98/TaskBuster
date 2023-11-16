import { useState } from "react";

import './App.css'
import { ListContext, Task } from "./context/TaskListContext";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ShowNavContext } from "./context/ShowNavContext";

function App() {
  const [list, setList] = useState<Task[]>([]);
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <>
    <BrowserRouter>
      <ListContext.Provider value={{ list, setList }}>
        <ShowNavContext.Provider value={{ showNav, setShowNav }}>
          <Header />
          <Sidebar />
          <Main />
        </ShowNavContext.Provider>
      </ListContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
