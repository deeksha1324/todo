import React from 'react'

export default function AddTask({taskList, setTaskList, task, setTask}) {

  const handleSubmit= (e)=>{
    e.preventDefault();

    // console.log(date.getTime())
    // console.log(e.target.task.value)
    // console.log(date.toLocaleDateString())
    if(task.id){
      const date = new Date();
      const updatedTaskList = taskList.map((value) => (value.id === task.id ? {id  : task.id, name: task.name, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : value ));
        setTaskList(updatedTaskList)
        setTask({})
    }
    else{
      const date=new Date()
    const newTask={
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList, newTask])
    // e.target.task.value=""
    setTask({}) //here we are clearing task so task.value doesn't exist so we are adding empty value "" using || at value field 
    }
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name='task' value={task.name || ""} placeholder='add task' maxLength="25" autoComplete='off'  onChange={(e) => setTask({...task, name:e.target.value})} required/>
        <button type='submit'>{task.id ? "Update" : "Add" }</button>
      </form>
    </section>
  )
}