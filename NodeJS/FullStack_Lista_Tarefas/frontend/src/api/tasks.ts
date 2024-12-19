
// ------ CONEXÃO FRONTEND E BACKEND
import { Task } from '../interfaces/tasks.interfaces'

const API = 'http://localhost:3000'



export const createTaskRequest = async(task: Task) => {
   return await fetch(`${API}/tasks`, {
      method: 'POST',
      // transformando em JSON, pois está no formato object
      body: JSON.stringify(task),
      headers: {
         'Content-Type': 'application/json'
      }
   })
}