import React from "react";
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal}) {

    // Creamos un estado para nuestro nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');
 
  // Creamos una función para actualizar el estado de nuestro nuevo TODO
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  
  // Función para cerrar el modal
  const onCancel = () => {
    setOpenModal(false);
  };
  
  // Función para agregar nuestro nuevo TODO
  const onSubmit = (event) => {
    // prevent default para evitar recargar la página
    event.preventDefault();
    // Utilizamos nuestra función para añadir nuestro TODO
    addTodo(newTodoValue);
    // Cerramos nustro modal
    setOpenModal(false);
    // También estaría bien resetear nuestro formulario
    setNewTodoValue('')
  };

    return (
        <form onSubmit={onSubmit}>
            <label>Añadir nueva tarea</label>
            <textarea   
            value={newTodoValue}
            onChange={onChange}
            placeholder="Sacar la basura"/>
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                 onClick={onCancel}
                 className="TodoForm-button TodoForm-button--cancel"
                 >
                    Cancelar
                 </button>
                <button
                type="submit"
                className="TodoForm-button TodoForm-button--add"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };