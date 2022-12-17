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
    const characterValidation = (input)=>{
        let regex = /[a-zA-Z]|\d/i;
        return regex.test(input);
    }
    const onSubmit = (event)=> {
        event.preventDefault();
        if(characterValidation(newTodoValue)){
            addTodos(newTodoValue);
            setOpenModal(false);
        }
    }
    const onKeyUp = (e) => {
        if (e.charCode === 13 && characterValidation(newTodoValue)) {
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
        className={!characterValidation(newTodoValue) ? 'textareaInvalidCharacter' : 'textarea'}
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
                disabled={!characterValidation(newTodoValue)}
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

