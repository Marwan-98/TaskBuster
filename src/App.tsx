import { useState } from "react";

import './App.css'
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { ShowNavContext } from "./context/ShowNavContext";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/inbox" /> } />
        </Routes>
        <ShowNavContext.Provider value={{ showNav, setShowNav }}>
          <Header />
          <Sidebar />
          <Main />
        </ShowNavContext.Provider>
      </BrowserRouter>
    </Provider>
  )
}

export default App
