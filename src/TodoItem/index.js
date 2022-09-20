import React from "react";
import './TodoItem.css';
import { Icon } from "../Icons/index.js";

function TodoItem(props) {

  const onCompleted = () => {
    alert('completado el todo' + props.text)
  };

    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
              onClick={props.onComplete}
        >
          {/* √ */}
          <Icon icon="check" />
        </span>
        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
          {props.text}
        </p>
        <span className="Icon Icon-delete"
              onClick={props.onDelete}
        >
          X
        </span>
      </li>
    );
  }

export { TodoItem };