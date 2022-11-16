import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';


const TodoCounter = ()=> {
    const { completeTodos, totalTodos} = React.useContext(TodoContext)
    return (
        <h2 className='TodoCounter'>
            {(completeTodos < totalTodos)
             ? `Has completado ${completeTodos} de ${totalTodos} TODOs`
             : `Has terminado todas las tareas`}
        </h2>
    )
}

export { TodoCounter };