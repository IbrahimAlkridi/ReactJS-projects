import React from 'react'
import '../../main.css'
import './card.css';
import { useRef, useState } from 'react';


const Card = ({ taskId, title, priority, time, isDone, setAllTasks }) => {


    const taskText = useRef(null);
    const card = useRef(null)
    const checkBox = useRef(null)

    const onDelete = () => {
        setAllTasks(prev => prev.filter(task => task.id !== taskId));
        card.current.classList.add("delete");
    }

    const onToggle = () => {
        taskText.current.classList.toggle("done");
        setAllTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, isDone: !task.isDone } : task
            )
        );


    }
    return (
        <div className="task-card" ref={card}>
            <h3 ref={taskText} className={isDone ? "done" : ""}>{title}</h3>

            <input id='check-box'
                ref={checkBox}
                type="checkbox"
                checked={isDone}
                onChange={onToggle}
            />

            {/* Actions */}
            <div className="actions">
                <span className={`priority ${priority.toLowerCase()}`}>
                    {priority}
                </span>

                <p className="deadline">⏰ {time}</p>

            </div>
            <button className="delete-btn" onClick={onDelete}>
                ❌
            </button>
        </div>
    );
};

export default Card