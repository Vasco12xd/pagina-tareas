import React from "react";
//import {BiCheckDouble as CheckSVG} from 'react-icons/bi';
import { ReactComponent as CheckSVG } from './delete.png';
import { FaRegTrashAlt } from "react-icons/fa";


function TodoIcon({onClick, type, color = 'gray'}) {

    const iconTypes = {
        check: color => 
        (<CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>),
        delete: color => 
        (<FaRegTrashAlt className="Icon-svg Icon-svg--delete" fill={color}/>),
    };
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>);
}

export { TodoIcon };