import React from "react";
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch'

function TodoHeader({
    completeTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
}) {
    return(
        <header>
            <TodoCounter completeTodos={completeTodos} totalTodos={totalTodos}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
        </header>
    )
}

export { TodoHeader };