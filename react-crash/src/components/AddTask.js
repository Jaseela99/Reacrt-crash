import React from 'react'

const AddTask = ({onAdd}) => {
    const [text ,setText]=React.useState("")
    const [day ,setDay]=React.useState("")
    const [reminder ,setReminder]=React.useState(false)
    const onSubmit=(e)=>{
        e.prevent.Default()
        //if task is empty then alerted
        if(!text){
           alert("please add task") 
           return
        }
        onAdd({text,day,reminder})
        setText("")
        setReminder(false)
        setDay("")
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type="text" placeholder='enter task name' value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time </label>
            <input type="text" placeholder='add day and time' value={day} onChange={(e)=>setDay(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>
        <input type="submit" value="save task" className='btn btn-block'
        />
    </form>
  )
}

export default AddTask