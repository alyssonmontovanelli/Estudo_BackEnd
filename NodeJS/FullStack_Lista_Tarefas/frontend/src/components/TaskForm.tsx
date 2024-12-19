
// Usado para criar e gerenciar estados dos componentes
// Atualizar informações dentro dos componotens
import { ChangeEvent, FormEvent, useState } from "react"

// Renderiza o formulário para gerenciar a criação das tarefas
function TaskForm() {

   // Estado
   // "task" é o estado atual que começa com o conteudo abaixo
   // "setTask"já é a função que atualiza o estado 
   const [task, setTask] = useState({
      title: "",
      description: "",
      done: false,
   });

   // "e" é o evento disparado
   // utiliza setTask para mudar o estado 
   // cria novos objetos com os dados atuais de task, ou seja:
   // e.target.name é atualizada pelo valor e.target.value
   // o que digitar no campo titulo, o task.tatle será atualizado 
   const handleChange = (
      e: ChangeEvent < HTMLInputElement | HTMLTextAreaElement >
   ) => setTask({ ...task, [e.target.name]: e.target.value});
   

   const handleSubmit = (
      e: FormEvent<HTMLFormElement>
   ) => { e.preventDefault();
      console.log(task);
   }


   return (
      <div>
         
         <form onSubmit={handleSubmit}>
            <input type="text"
            name="title"
            className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800
            block w-full my-2"
            placeholder="Escreva o Título"
            onChange={handleChange}
            />

            <textarea name="description"
            rows={3}
            className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800
            block w-full my-2"
            placeholder="Descrição da atividade"
            onChange={handleChange}
            ></textarea>
            
            <label htmlFor=""
            className="inline-flex items-center gap-x-2">
               <input type="checkbox" 
               className="h-5 w-5 text-indigo-600"/>
               <span>Done</span>
            </label>

            <button className="bg-indigo-500 px-3 block py-2 w-full">
               Save
            </button>



         </form>

      </div>
   )
}

export default TaskForm