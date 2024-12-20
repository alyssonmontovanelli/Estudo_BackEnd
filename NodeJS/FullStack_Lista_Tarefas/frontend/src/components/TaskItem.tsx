import { Task } from "../interfaces/tasks.interfaces"

interface Props{
   task: Task
}

function TaskItem({task}: Props) {
   return (
      <div key={task._id} className="bg-gray-900 p-2 my-2 flex
      justify-between hover:bg-gray-700 hover:cursor-pointer">
      <div>
         <h1>{task.title}</h1>
         <p>{task.description}</p>
      </div>
      <div className="flex gap-x-2">
         <button>update</button>
         <button>delete</button>

      </div>

      </div>
   );
}

export default TaskItem;

// MODULARIZANDO O 