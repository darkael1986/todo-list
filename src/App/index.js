import React from 'react';
import { AppUI } from './AppUi';



const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Volar", completed: true},
  {text: "Cantar cantos", completed: false},
  {text: "Llorar con la llorona", completed: false}
];



function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
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

  const completTodos = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodos = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text );
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1)
    setTodos(newTodos);
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
