import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { TodoButton } from './TodoButton';

const defaultTodos = [
  {text: "Cortar cebolla", completed: false},
  {text: "Volar", completed: true},
  {text: "Cantar cantos", completed: true},
  {text: "Llorar con la llorona", completed: false}
];



function App() {

  const [todos, setTodos] = React.useState(defaultTodos)
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed === true).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}

      />
      <TodoList>
        {todos.map(todo => (
          <TodoItem
          key={todo.text} 
          text = {todo.text}
          completed={todo.completed}
           />
        ))}
      </TodoList>
      <TodoButton />
    </React.Fragment>
    
  );
}

export default App;
