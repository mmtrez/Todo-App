import {ReactNode, createContext, useEffect, useState} from 'react';

export interface Task {
  id: string;
  title: string;
  dateTime: string;
  description: string;
}

interface Context {
  tasks: Task[] | [];
  setTasks: React.Dispatch<React.SetStateAction<Task[] | []>>;
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoContext = createContext<Context>({} as Context);

export const TodoProvider = ({children}: {children: ReactNode}) => {
  const [dark, setDark] = useState<boolean>(() => {
    const lcStorageVal = localStorage.getItem('darkMode');
    if (lcStorageVal) return JSON.parse(lcStorageVal);
    return false;
  });
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[] | []>(() => {
    const lcStorageVal = localStorage.getItem('tasks');
    if (lcStorageVal) return JSON.parse(lcStorageVal);
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(dark));
  }, [dark]);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        dark,
        setDark,
        openDialog,
        setOpenDialog,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
