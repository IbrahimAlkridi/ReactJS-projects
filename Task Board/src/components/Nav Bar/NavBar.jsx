import React, { useEffect, useState } from 'react'
import '../../main.css'
import './navBar.css';
import PlusIcon from '../../assets/plus.svg?react';
import GarbageIcon from '../../assets/garbage.svg?react';
import { useRef } from 'react';
const NavBar = ({ isModalActive, setModal, setAllTasks }) => {

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
            <button className='nav-btn' onClick={showModal}><PlusIcon className="icon" /> Add task</button>
        </div>
    )
}

export default NavBar