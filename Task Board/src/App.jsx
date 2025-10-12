import React, { useState, useRef, useEffect } from "react";
import './main.css'
import "./App.css";
import NavBar from "./components/Nav Bar/NavBar.jsx";
import Modal from "./components/Task Modal/Modal.jsx";
import ModeToggle from "./components/Mode Toggle Button/ModeToggle.jsx";
import Header from "./components/Header/Header.jsx";
import Board from "./components/Board/Board.jsx";
import Footer from "./components/Footer/footer.jsx";

const App = () => {

  const [isModalActive, setModal] = useState(false);
  const [allTasks, setAllTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [taskCounter, setTaskCounter] = useState(allTasks.length);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    setTaskCounter(allTasks.length);
  }, [allTasks]);







  return (
    <>
      <div className="page" >

        <ModeToggle />
        <Header />
        <NavBar setAllTasks={setAllTasks} isModalActive={isModalActive} setModal={setModal} />
        <Board taskCounter={taskCounter} allTasks={allTasks} setAllTasks={setAllTasks} />
        <Footer />
        {isModalActive && <Modal allTasks={allTasks} setAllTasks={setAllTasks} setModal={setModal} isModalActive={isModalActive} />}

      </div>

    </>
  );
};

export default App;
