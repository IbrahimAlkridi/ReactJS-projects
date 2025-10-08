import React from 'react'
import './board.css'
import Card from '../Task Card/Card.jsx'
import { useState, useEffect } from 'react'


const Board = ({ allTasks, setAllTasks }) => {

    return (
        <div className="board" >
            {/* includes the Cards & label (tracks num of tasks top center) */}

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