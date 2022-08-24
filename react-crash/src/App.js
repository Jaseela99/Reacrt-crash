import React, { useEffect } from "react"
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";
import Footer from "./components/footer";

function App() {
  const [showAddTask,setShowAddTask]=React.useState(false)
  const [tasks,setTasks]=React.useState([])

  useEffect(()=>{
   const getTasks = async()=>{
    const tasksFromServer = await fetchTasks()
    setTasks(tasksFromServer)
   }
    getTasks()
  },[])
  //fetch tasks
  const fetchTasks = async ()=>{
    const res = await fetch("http://localhost:5000/tasks")
  const data = await res.json()
  return data
  }
  //fetch task
  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
  }
  //Add Task
  const addTask= async(task)=>{
    const res = await fetch('http://localhost:5000/tasks',
    {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data])
    /* const id = Math.floor(Math.random()*10000+1)
    const newTask={id,...task}
    setTasks([...tasks,newTask]) */
  }
  //Delete Task
  const deleteTask= async(id)=>{
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter((task)=>task.id!== id))
  }
  //toggle reminder
  const toggleReminder= async (id)=>{
    const taskToToggle=await fetchTask(id)
    const updateTask={...taskToToggle , reminder:!taskToToggle.reminder}
   const res= await fetch(`http://localhost:5000/tasks/${id}`,{
    method:"PUT",
    headers:{
      "Content-type":"application/json"
    },
    body:JSON.stringify(updateTask)
   })
   const data=await res.json()
    setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:data.reminder}: task))
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      <Routes>

      
    <Route  path="/" exact element={
      <>
      {showAddTask &&(<AddTask onAdd={addTask}/>)}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):("No tasks to show")}
      </>}/>
    <Route path="/about" element={<About/>}/>
      </Routes>
    <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
