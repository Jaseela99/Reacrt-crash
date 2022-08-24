import React from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
function App() {
  const [tasks,setTasks]=React.useState([])
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
      <Header />
      {tasks.length>0?(<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>):("No tasks to show")}
    </div>
  );
}

export default App;
