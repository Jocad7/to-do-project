import React from "react";
import './TodosLoading.css'

function TodosLoading ({ error }) {
    return (
        <>
        <div className="LoadingTodo-container">
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Estamos cargando, no desesperes...</p>
            <span className="LoadingTodo-deleteIcon"></span>
        </div>
        <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Estamos cargando, no desesperes...</p>
        <span className="LoadingTodo-deleteIcon"></span>
        </div>
        </>
    )
}


export { TodosLoading };