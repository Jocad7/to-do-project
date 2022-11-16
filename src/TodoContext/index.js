import React from "react";
import { useLocalStorage } from "./UseLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []); 
      
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false)
    
      const completeTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(searchValue.length < 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
          
        })
      }
    
      
      const addTodos =  (text)=>{
           
        const newTodos = [...todos]
        newTodos.push({
          completed: false,
          text,
        });
        
        saveTodos(newTodos);
      };

      const completedTodos =  (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos]
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        
        saveTodos(newTodos);
        // todos[todoIndex] ={
        //   text: todos[todoIndex].text,
        //   completed: true,
        // }
      };
      const deleteTodo = (text)=>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        
        saveTodos(newTodos);
      };
    
      // console.log('render');
    
      // React.useEffect(()=> {
      //   console.log('Use effect code')
      // }, [totalTodos]);
    
      // console.log('render after use effect')

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completeTodos,
            addTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completedTodos,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
           {props.children} 
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }; 