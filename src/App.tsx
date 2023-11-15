import { useState } from "react";

import './App.css'
import Header from './components/Header/Header'
import List from './components/List/List'
import TaskInput from './components/TaskInput/TaskInput'
import { ListContext, Task } from "./context/TaskListContext";

function App() {
  const [list, setList] = useState<Task[]>([]);

  return (
    <>
      <ListContext.Provider value={{ list, setList }}>
        <Header />
        <TaskInput />
        <List />
      </ListContext.Provider>
    </>
  )
}

export default App
