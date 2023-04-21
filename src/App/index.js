/* import './App.css'; */
import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from "../TodoHeader";
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem/';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodosError } from "../TodosError";
import { EmptyTodos } from "../EmptyTodos";
import { TodosLoading } from "../TodosLoading";

/* const defaultTodos=[
  {text:'Cortar cebolla', completed:true},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false},
  {text: 'LALALALAA', completed: false },
]; */

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo
  } = useTodos();

    return (
      <React.Fragment>
        <TodoHeader>
          <TodoCounter
            totalTodos={totalTodos}
            completedTodos={completedTodos}
          />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </TodoHeader>

        <TodoList>
          {loading && <TodosLoading>Cargando...</TodosLoading>}
          {error && <TodosError>Error!</TodosError>}
          {!loading && !searchedTodos.length && (
            <EmptyTodos>Crea tu primer TODO</EmptyTodos>
          )}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm 
            setOpenModal={setOpenModal}
            setaddTodo={addTodo}
            />
          </Modal>
        )}

        <CreateTodoButton setOpenModal={setOpenModal} />
      </React.Fragment>
    );
}

export default App;
