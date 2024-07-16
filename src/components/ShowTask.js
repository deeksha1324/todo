import React from 'react'

export default function ShowTask({taskList,setTaskList, task, setTask}) {

  // const tasks=[{id:1001, name:"Task-A", time:"05:23:45"},
  //   {id:1002, name:"Task-B", time:"05:23:45"},
  //   {id:1003, name:"Task-C", time:"05:23:45"}
  // ]

  const handleEdit = (id) => {
    const selectedTask = taskList.find((value) => value.id === id)
    setTask(selectedTask)

  }

  const handleDelete = (id) => {
    const updatedTaskList= taskList.filter((input) => input.id !== id);
    setTaskList(updatedTaskList)

  }

  return (
    <section className="showTask">
      <div className="head">
        <span className="title">Todo</span>
        <span className="count">{taskList.length}</span>
      <button className='clearAll' onClick={()=> setTaskList([])}>Clear All</button>
      </div>
      <ul>
      {taskList.map((value)=>(
        <li key={value.id}>
        <p>
          <span className='name'>{value.name}</span>
          <span className='time'>{value.time}</span>
        </p>
        <i onClick = {() => handleEdit(value.id)} className='bi bi-pencil-square'></i>
        <i onClick = {() => handleDelete(value.id)} className='bi bi-trash'></i>
      </li>

))}
        
      </ul>
    </section>
  )
}
