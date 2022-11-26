import React from "react";
import "./todoForm.css"

function TodoForm({ addTodos, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

   

    const onCancel = ()=> {
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event)=> {
        event.preventDefault();
        addTodos(newTodoValue);
        setOpenModal(false);
    }
    const onKeyUp = (e) => {
        if (e.charCode === 13) {
          e.preventDefault();
          addTodos(newTodoValue);
          onCancel();
        }
      };

    return (
    <form 
    onSubmit ={onSubmit}
    onKeyPress = {onKeyUp}
    >
        <label>
            Ingresa un nuevo TODOs
        </label>
        <textarea 
        value ={newTodoValue}
        onChange={onChange}
        placeholder="Escribe que tarea tienes por hacer..."
        />
        <div className="TodoForm-buttonContainer">
            <button
            className="TodoForm-button TodoForm-button--cancel"
                type="button"
                onClick={onCancel}
            >
                Cancelar
            </button>
            <button
                className="TodoForm-button TodoForm-button--add"
                type="submit"
            >
                Añadir
            </button>
        </div>
    </form>
    );
}

export { TodoForm }

