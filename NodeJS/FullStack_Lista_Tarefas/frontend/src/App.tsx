// Importando os componentes no App
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


function App() {
  return(
    <div className="bg-zinc-900 h-screen text-white flex items-center
    justify-center">
      
      <div className="bg-zinc-950 p-4 w-2/4">
      
      <h1 className="text-3xl font-bold text-center block m-2">Task App</h1>

      <TaskForm />
      <TaskList />
      </div>

    </div>
  )
}

export default App