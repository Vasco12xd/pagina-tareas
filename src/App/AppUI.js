import React from "react";
import { TodoContext } from "../TodoContext";
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


function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
    <React.Fragment>
        <TodoCounter/>
        <TodoSearch />
        
        
          <TodoList>
            {loading && <TodosLoading>Cargando...</TodosLoading>}
            {error && <TodosError>Error!</TodosError>}
            {(!loading && !searchedTodos.length) && <EmptyTodos>Crea tu primer TODO</EmptyTodos>}

            {searchedTodos.map(todo =>(
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
                <TodoForm />
             </Modal>
              )}
          

        <CreateTodoButton 
          setOpenModal={setOpenModal}
        />
        
        </React.Fragment>
        
    );
}

export { AppUI };