
// ------ CONEXÃO FRONTEND E BACKEND
import { CreateTask } from '../interfaces/tasks.interfaces'

const API = 'http://localhost:3000'


/// ENVIAR DADOS AO BACKEND E BANCO DE DADOS

export const createTaskRequest = async(task: CreateTask) => {
   return await fetch(`${API}/tasks`, {
      method: 'POST',
      // transformando em JSON, pois está no formato object
      body: JSON.stringify(task),
      headers: {
         'Content-Type': 'application/json'
      }
   })
}

// PUXAR DADOS DO BANCO DE DADOS E VISUALIZAR
export const getTaskRequest = () => fetch(`${API}/tasks`)