// START VISUALIZANDO TASK LIST

import { useEffect, useState } from "react"
import { getTaskRequest } from '../api/tasks'
import { Task } from '../interfaces/tasks.interfaces'

// Importando componente item, para compor a lista MODULARIZAÇÃO
import TaskItem from "./TaskItem"


function TaskList() {

   const [ tasks, setTask] = useState<Task[]>([])

   useEffect(() => {
      getTaskRequest()
         .then((response) => response.json())
         .then((data) => setTask(data))
   }, [])
   return (
      <div>
         {tasks.map((task) => (
            <TaskItem task = {task} key={task._id}/>
         ))}
      </div>
   )
}

export default TaskList