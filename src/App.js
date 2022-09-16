/* import './App.css'; */
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text: 'LALALALAA', completed: false },
];

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  // El estado de nuestra búsqueda
  const [searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let searchedTodos = [];
  // Lógica para filtrar
  if(!searchValue.length >= 1){
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    });
  }

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
        {searchedTodos.map(todo =>(
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        />
        ))}
      </TodoList>
    
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
