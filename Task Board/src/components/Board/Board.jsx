import React from 'react'
import '../../main.css'
import './board.css'
import Card from '../Task Card/Card.jsx'
import { useState, useEffect } from 'react'


const Board = ({ allTasks, setAllTasks, taskCounter }) => {

    return (
        <div className="board" >
            {/* includes the Cards & label (tracks num of tasks top center) */}
            <p className='task-counter'>{taskCounter} Tasks!</p>
            {

                allTasks.map(task => (
                    <Card
                        key={task.id}
                        taskId={task.id}
                        title={task.task}
                        priority={task.priority}
                        time={task.deadline}
                        isDone={task.isDone}
                        setAllTasks={setAllTasks}
                    />
                ))
            }
        </div>
    )
}

export default Board