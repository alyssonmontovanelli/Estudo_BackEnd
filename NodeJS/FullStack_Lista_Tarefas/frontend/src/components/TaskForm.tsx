function TaskForm() {
   return (
      <div>
         
         <form action="">
            <input type="text"
            name="title"
            className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800
            block w-full my-2"
            placeholder="Escreva o Título"/>

            <textarea name="description"
            rows={3}
            className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800
            block w-full my-2"
            placeholder="Descrição da atividade"></textarea>
            
            <label htmlFor="">
               <input type="checkbox" />
               <span>Done</span>
            </label>

            <button>
               Save
            </button>



         </form>

      </div>
   )
}

export default TaskForm