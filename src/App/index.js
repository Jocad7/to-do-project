import React from 'react';
import { WarningIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
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
    addTodos,
   
  } = useTodos();

  return(
        <>
         <TodoHeader>
            <TodoCounter 
            completeTodos={completeTodos} 
            totalTodos={totalTodos}
            />
            {totalTodos !== 0 && <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>}
         </TodoHeader>

            <TodoList 
              error={error}
              loading={loading}
              searchedTodos={searchedTodos}
              searchText={searchValue}
              totalTodos={totalTodos}
              onError={()=> <TodosError error={error}/>}
              onLoading={()=> <TodosLoading />}
              onEmpty={()=>  <EmptyTodos />}
              onEmptySearchResult={(searchText)=> (
                <Flex direction='column' align='center'>
                    <WarningIcon w={100} h={100} color='rgba(255, 127, 17,.5)'/>
                    <p>No hay resultados para <strong>{searchText}</strong></p>
                </Flex>
              )}

              render={todo => (
                <TodoItem 
                key = {todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete = {()=> completedTodos(todo.text)}
                onDelete = {()=> deleteTodo(todo.text)}
                />
              )}
            />
            {/* <TodoList>
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
          </TodoList> */}
          
          {openModal && (
            <Modal>
              <TodoForm addTodos={addTodos} setOpenModal={setOpenModal}/> 
            </Modal>
          )}
          
        <CreateTodoButton
          setOpenModal = {setOpenModal}
        />  
      </>
    );
}

export { App };
