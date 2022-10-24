import React from 'react';
import { AppUI } from './AppUi';



// const defaultitem = [
//    {text: "Cortar cebolla", completed: false},
//    {text: "Volar", completed: true},
//    {text: "Cantar cantos", completed: false},
//    {text: "Llorar con la llorona", completed: false}
//  ];

function useLocalStorage(itemName, initialValue){

  
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);

  const saveitem = (newitem)=>{
    const stringifyitem = JSON.stringify(newitem);
    localStorage.setItem(itemName, stringifyitem);
    setItem(newitem);
  };

  return [
    item,
    saveitem,
  ];
}


function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  let searchedTodos= [];

  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else{

    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
     
  } 

  

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text );
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text)=>{
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
      completitem = {completeTodo}
      deleteitem = {deleteTodo}
    />
    
  );
}

export default App;
