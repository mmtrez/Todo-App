import { createContext, useEffect, useState } from "react";

const TodoContext = createContext({});

export const TodoProvider = ({ children }) => {
    const [dark, setDark] = useState(JSON.parse(localStorage.getItem('darkMode')) || false);
    const [openDialog, setOpenDialog] = useState(false);
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
    useEffect(() => {
        localStorage.setItem('darkMode', dark);
    }, [dark])

    return (
        <TodoContext.Provider value={{
            tasks, setTasks, dark, setDark,
            openDialog, setOpenDialog,
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContext;