import { FaTimes } from 'react-icons/fa'  // react-icons, font awesome library, FaTimes is the 'X' delete icon

const Task = ({ task , onDelete, onToggle}) => {
  return (
    // template literal + ternary operator
    // to check if reminder is true, then we 
    // add a border. else we add nothing ''
    <div className={`task ${task.reminder ? 'reminder' : ''}`} 
    onDoubleClick={()=> onToggle(task.id)}>
      <h3>{task.text} 
      <FaTimes 
      style={{color: 'red', cursor: 'pointer'}} 
      onClick={ () => onDelete(task.id)}/> 
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
