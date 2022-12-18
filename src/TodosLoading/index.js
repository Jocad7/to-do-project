import React from "react";
import SyncLoader from "react-spinners/SyncLoader";
import './TodosLoading.css'

function TodosLoading ({ error }) {
    return (
        <div className='CircleLoad-container'>
        <SyncLoader
            color='#ff7f11'
            size={20}
        />
        {/* <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Estamos cargando, no desesperes...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div> */}
        </div>
    )
}


export { TodosLoading };