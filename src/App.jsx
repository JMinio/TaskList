import './App.css';
import { TaskCreator } from './Components/TaskCreator';
import { useState, useEffect } from 'react';

function App() {

  const [taskItems, setTaskItems] = useState([])

  function createNewTask(newTaskName){
    if(!taskItems.find(task => task.name === newTaskName)){
      setTaskItems([...taskItems, {name:newTaskName, done:false}])
      console.log("tarea agregada exitosamente!!")
    }  
    else{
      console.log("tarea ya ingresada, por favor reintente.")
    }
  }

  useEffect(()=>{ //se inicia cuando arranca el codigo, no depende de un arreglo.
    let info = localStorage.getItem('tasks'); 
    if (info){  //Consulta si tiene informacion, caso positivo lo convierte en JS. 
      setTaskItems( JSON.parse(info));
    }
  },[])
  
  useEffect(()=>{  //CUANDO SE ACTUALICE taskItems, se guarda en el local storage
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />
      
      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
            taskItems.map(task => (
              <tr key={task.name}>
                <td>
                {task.name}
                </td>
                </tr>
            ))
          }
        </tbody>
      </table>


    </div>
  );
}

export default App;
