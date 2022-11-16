import React from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoCounter.css';


const TodoCounter = ()=> {
    const { completeTodos, totalTodos} = React.useContext(TodoContext)
    return (
        <h2 className='TodoCounter'>
            {(completeTodos < totalTodos && totalTodos > 0) && `Has completado ${completeTodos} de ${totalTodos} TODOs`
            }
            {!(completeTodos < totalTodos) && totalTodos > 0 && 'Has terminado todas tus tareas'}
            {(!totalTodos) && 'No tienes tareas pendientes, crea una.'}
    
        </h2>
    )
}

export { TodoCounter };