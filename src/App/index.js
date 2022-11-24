import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../Components/TodoCounter/TodoCounter';
import { TodoSearch } from '../Components/TodoSearch/TodoSearch';
import { TodoList } from '../Components/TodoList/TodoList'
import { TodoItem } from '../Components/TodoItem/TodoItem';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../Components/CreateTodoButton/CreateTodoButton';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import './App.css';

// const defaultTodos = [
//   {
//     text: 'Estudiar',
//     completed: true
//   },
//   {
//     text: 'Hacer Ejercicio',
//     completed: false
//   },
//   {
//     text: 'Lavar',
//     completed: false
//   },
//   {
//     text: 'Comer',
//     completed: true
//   },
// ];



function App() {
  const {
    error, 
    loading, 
    searchedTodos, 
    completedTodos, 
    deleteTodo,
    openModal,
    setOpenModal,
    completeTodos,
    totalTodos,
    searchValue, 
    setSearchValue,
   
  } = useTodos();

  return(
        <>
         <TodoHeader>
            <TodoCounter completeTodos={completeTodos} totalTodos={totalTodos}/>
            {totalTodos !== 0 && <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>}
         </TodoHeader>

            <TodoList>
              {error && <TodosError error={error}/>}
              {loading && <TodosLoading />}
              {(!loading && !searchedTodos.length) && <EmptyTodos />}
  
            {searchedTodos.map(todo => (
              <TodoItem 
              key = {todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete = {()=> completedTodos(todo.text)}
              onDelete = {()=> deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          
          {openModal && (
            <Modal>
              <TodoForm/> 
            </Modal>
          )}

        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />  
      </>
    );
}

export { App };
