import React from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [showAddTask,setShowAddTask]=React.useState(false)
  const [tasks,setTasks]=React.useState([])
  //Add Task
  const addTask=(task)=>{
    const id = Math.floor(Math.random()*10000+1)
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
  //Delete Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!== id))
  }
  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task,reminder:!task.reminder}: task))
  }
  return (
    <div className="App">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask &&(<AddTask onAdd={addTask}/>)}
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):("No tasks to show")}
    </div>
  );
}

export default App;
