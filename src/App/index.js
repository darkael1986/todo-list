import React from 'react';
import { AppUI } from './AppUi';



// const defaultTodos = [
//    {text: "Cortar cebolla", completed: false},
//    {text: "Volar", completed: true},
//    {text: "Cantar cantos", completed: false},
//    {text: "Llorar con la llorona", completed: false}
//  ];



function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos);
  }


  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else{

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
     
  } 

  const saveTodos = (newTodos)=>{
    const stringifyTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifyTodos);
    setTodos(newTodos);
  }

  const completTodos = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodos = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos);
  };


  return (
    <AppUI 
      total={totalTodos}
      completed={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos = {searchedTodos}
      completTodos = {completTodos}
      deleteTodos = {deleteTodos}
    />
    
  );
}

export default App;
