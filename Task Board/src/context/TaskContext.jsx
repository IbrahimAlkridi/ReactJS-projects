import { createContext, useState } from "react";

// 1. Create the context
const TaskContext = createContext();

// 2. Create the provider component
export const TaskProvider = ({ children }) => {
    const [allTasks, setAllTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    return (
        <TaskContext.Provider value={{ allTasks, setAllTasks }}>
            {children}
        </TaskContext.Provider>
    );
};

// 3. Export the context itself (for useContext)
export default TaskContext;
