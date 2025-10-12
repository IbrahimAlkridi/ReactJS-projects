import React from 'react'
import '../../main.css'
import './card.css';
import { useRef, useState, useEffect } from 'react';


const Card = ({ taskId, title, priority, time, isDone, setAllTasks }) => {


    const taskText = useRef(null);
    const card = useRef(null)
    const checkBox = useRef(null)
    const [deadline, setDeadline] = useState();







    const handleDeadline = useEffect(() => {
        let now = new Date();

        //  time format = "01.14"
        let [hours, mins] = time.split(':').map(Number);
        let taskTime = new Date();
        taskTime.setHours(hours, mins, 0, 0);

        if (taskTime < now) {
            taskTime.setDate(taskTime.getDate() + 1);
        }
        let msDiff = taskTime - now;
        let minsDiff = Math.floor(msDiff / 1000 / 60);


        let deadMins = minsDiff % 60;
        let deadHours = Math.floor(minsDiff / 60);

        return (
            <p>
                {deadHours !== 0 && <p> {deadHours} hrs</p>}
                {deadMins !== 0 && <p> {deadMins} mins</p>}
                {/* {deadMins} mins */}
            </p>
        )
    }, [new Date().getMinutes()])





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
                {/* i wanna display the deadline of the taks ex: 2hrs 55min left */
                    // it's not constant! it's going to change every time 
                    // edge test cases : 
                    // - exceeding the deadline -> make it redMessage "time is over"

                }
                <p className="deadline">⏰ {handleDeadline()}</p>

            </div>
            <button className="delete-btn" onClick={onDelete}>
                ❌
            </button>
        </div>
    );
};

export default Card