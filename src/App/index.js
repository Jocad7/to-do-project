import React from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from '../TodoContext/UseLocalStorage';
import { TodoProvider } from '../TodoContext';
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
  
  return (
   <TodoProvider>
      <AppUI/>
   </TodoProvider>
  );
}

export { App };
