import React from 'react';
//import { ReactComponent as CheckSVG } from './check.svg';
//import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';
import { BiCheckDouble} from "react-icons/bi";
import { BiTrash} from "react-icons/bi";

const iconTypes = {
  "check": color => (
    <BiCheckDouble className="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": color => (
    <BiTrash className="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
