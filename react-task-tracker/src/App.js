import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

// useEffect : used when we want to do something when the page loads
// Full about.js with backend json server example
// https://github.com/bradtraversy/react-crash-2021/blob/master/src/App.js

function App() {

  // State for button to toggle add task form
  const [showAddTask, setShowAddTask] = useState(false)


  const [tasks, setTasks] = useState([
    {
        id : 1,
        text: "A",
        day: "Feb 5th at 2:30 pm",   
        reminder: true,
    },
    {
        id : 2,
        text: "B",
        day: "Feb 5th at 3:30 pm",   
        reminder: true,
   },
   {
        id : 3,
        text: "C",
        day: "Feb 5th at 4:30 pm",   
        reminder: true,
   },
  ])

  // add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {
      id,
      ...task
    }
    setTasks([...tasks, newTask])
  }



  // delete task
  // Is passed to Tasks then passed to Task
  const deleteTask = (id) => {
    // console.log('delete', id);
    setTasks(tasks.filter((task)=> task.id !== id))
  }


  // toggle reminder
  const toggleReminder = (id) => {
    // console.log(id)
    setTasks(tasks.map((task)=> task.id === id? {...task, reminder: !task.reminder} : task))
  }



  return (
      // jsx syntax
      <div className="container">
        <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

        {showAddTask && <AddTask onAdd = {addTask}/>}

        {tasks.length > 0? 
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
        : 'No tasks to show'
        }
      
      
      </div>
    );
}




export default App;
