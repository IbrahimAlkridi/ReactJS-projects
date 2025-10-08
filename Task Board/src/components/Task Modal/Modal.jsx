import { React, useRef, useState } from 'react'
import '../../main.css'
import './modal.css'
import closeBtn from '../../assets/close.svg';

const Modal = ({ isModalActive, setModal, allTasks, setAllTasks }) => {
    const modal = useRef(null);
    const [taskValue, setTaskValue] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState('');

    const closeModal = () => {
        if (isModalActive) setModal(false);
        modal.current.classList.toggle("hide");
    };

    const handleRadios = (e) => {
        setPriority(e.target.value);
    };

    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();

        // Custom validation (beyond HTML required)
        if (!taskValue.trim()) {
            alert("Task name cannot be empty or just spaces!");
            return;
        }

        const task = {
            id: Date.now(),
            task: taskValue.trim(),
            deadline: date,
            priority: priority,
            isDone: false,
        };

        setAllTasks([...allTasks, task]);
        localStorage.setItem("tasks", task);


        // console. log([...allTasks, task]);
        // Reset form
        setTaskValue('');
        setPriority('');
        setDate('');
        closeModal();
    };

    return (
        <div className="back-drop-modal" ref={modal}>
            <div className="modal">
                <button className="close-btn" onClick={closeModal}>
                    <img src={closeBtn} alt="close-btn" />
                </button>

                <form onSubmit={addTask}>
                    <input
                        type="text"
                        placeholder="Type new task..."
                        className="inp"
                        autoFocus
                        onChange={(e) => setTaskValue(e.target.value)}
                        value={taskValue}
                        required
                        maxLength="80"
                    />

                    <div className="priority-section" onChange={handleRadios}>
                        <h4>Choose the task's priority</h4>
                        <div>
                            <input type="radio" name="priority" value="High" required />
                            <label htmlFor="high">High</label>
                        </div>
                        <div>
                            <input type="radio" name="priority" value="Medium" required />
                            <label htmlFor="medium">Medium</label>
                        </div>
                        <div>
                            <input type="radio" name="priority" value="Low" required />
                            <label htmlFor="low">Low</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="date">Choose deadline</label>
                        <input
                            type="time"
                            className="inp"
                            name="date"
                            value={date}
                            onChange={handleDate}
                            required
                        />
                    </div>

                    <button id="add-btn" type="submit">Add</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
