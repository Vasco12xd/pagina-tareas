import React from "react";
import './TodoItem.css';
import { CompleteIcon } from "../TodoIcon/CompleteIcon";
import { DeleteIcon } from "../TodoIcon/DeleteIcon";

function TodoItem(props) {

  const onCompleted = () => {
    alert('completado el todo' + props.text)
  };

    return (
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={onCompleted}
        />
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <DeleteIcon
          onDelete={props.onDelete}
        />
      </li>
    );
  }

export { TodoItem };