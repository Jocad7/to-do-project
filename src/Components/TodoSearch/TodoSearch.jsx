import React from "react"

import './TodoSearch.css'


const TodoSearch = ({ searchValue, setSearchValue, loading, totalTodos }) => {
       
    const onSearchValueChange = (event)=> {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }

    return (
    <input 
    className= "TodoSearch" 
    placeholder= "Buscar"
    value={searchValue}
    onChange={onSearchValueChange}
    disabled={loading || totalTodos < 1}
    />
    )
    
}

export { TodoSearch };