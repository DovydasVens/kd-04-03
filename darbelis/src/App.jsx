import { useEffect, useState } from 'react'
import './App.css'
import './components/hero.jsx'
import Hero from './components/hero.jsx'
import Navbar from './components/navbar.jsx'
import Tasks from './components/tasks.jsx'
import NewTask from './components/NewTask.jsx'


function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
 
  useEffect(() => {
  
   localStorage.setItem('tasks', JSON.stringify(tasks));
   
  }, [tasks]);

  return (
    <>
   <Navbar />
   <NewTask setTasks={setTasks} />
   <Tasks tasks={tasks} setTasks={setTasks} />

    
    </>
  )
}

export default App
