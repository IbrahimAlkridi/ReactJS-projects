import React, { useState, useEffect, useContext } from "react";
import './main.css'
import "./App.css";
import NavBar from "./components/Nav Bar/NavBar.jsx";
import Modal from "./components/Task Modal/Modal.jsx";
import ModeToggle from "./components/Mode Toggle Button/ModeToggle.jsx";
import Header from "./components/Header/Header.jsx";
import Board from "./components/Board/Board.jsx";
import Footer from "./components/Footer/footer.jsx";
import TaskContext from "./context/TaskContext.jsx";


const App = () => {

  const { allTasks, setAllTasks } = useContext(TaskContext);
  const [isModalActive, setModal] = useState(false);

  const [taskCounter, setTaskCounter] = useState(allTasks.length);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    setTaskCounter(allTasks.length);
  }, [allTasks]);







  return (
    <div className="page" >

      <ModeToggle />
      <Header />
      <NavBar isModalActive={isModalActive} setModal={setModal} />
      <Board taskCounter={taskCounter} />
      <Footer />
      {isModalActive && <Modal setModal={setModal} isModalActive={isModalActive} />}

    </div>

  );
};

export default App;
