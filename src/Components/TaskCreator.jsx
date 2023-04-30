import { useState } from 'react';

export const TaskCreator = ({ createNewTask }) => {

    const [newTasking, setNewTasking] = useState('')

    const handleSubmit = (e) => { /* funcion para capturar los datos */
        e.preventDefault();
        createNewTask(newTasking);
        /* localStorage.setItem('task', newTasking) //localstorage para guardar "clave"=task y lo que el usuario escribe */
        setNewTasking(''); //sirve para limpiar el input una vez guardado.  
    }

    return (

        <form onSubmit={handleSubmit}> {/* Usar para capturar los datos antes de que se envien */}
            <input
                type="text"
                placeholder="Enter a new task"
                value={newTasking}
                onChange={(e) => setNewTasking(e.target.value)} /> {/* guardamos el valor que el user ingreso en el input */}

            <button>Save Task</button> {/* Queremos ver que valor ingreso en el input */}
        </form>
    )
}