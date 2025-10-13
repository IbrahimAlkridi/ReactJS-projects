import React, { useEffect, useState, useRef, useContext } from 'react'
import '../../main.css'
import './navBar.css';
import PlusIcon from '../../assets/plus.svg?react';
import GarbageIcon from '../../assets/garbage.svg?react';
import TaskContext from "../../context/TaskContext.jsx";

const NavBar = ({ isModalActive, setModal }) => {
    const { allTasks, setAllTasks } = useContext(TaskContext);
    const [progress, setProgress] = useState(0);
    const proBar = useRef();

    useEffect(() => {
        proBar.current.style.width = `${progress}%`;
    }, [progress])

    useEffect(() => {
        let completedCounter = 0;
        if (allTasks.length === 0) {
            setProgress(0);
            return;
        }

        allTasks.map(task => {
            { task.isDone === true && completedCounter++ }
        })
        const percent = Math.floor(completedCounter / allTasks.length * 100);
        setProgress(percent);
    }, [allTasks])



    const deleteAll = () => {
        setAllTasks([]);
    }

    const showModal = () => {
        if (!isModalActive)
            setModal(true);
    }

    return (

        <div className="bar">
            <button className='nav-btn' onClick={deleteAll}><GarbageIcon className="icon" /> Delete all</button>
            <div id="myProgress">
                <div id="myBar" ref={proBar}><span>{progress}%</span></div>
            </div>
            <button className='nav-btn' onClick={showModal}><PlusIcon className="icon" /> Add task</button>
        </div>
    )
}

export default NavBar