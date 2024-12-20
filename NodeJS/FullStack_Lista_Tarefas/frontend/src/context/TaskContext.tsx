import { createContext, useState } from 'react'

export const TaskContext = createContext({
   tasks: [],
})


interface Props {
   children: React.ReactNode
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
   
   const [ tasks, setTasks] = useState([]);

   return (
      <TaskContext.Provider value = {{tasks}}>
         {children}
      </TaskContext.Provider> 
   );
}

export default TaskContext