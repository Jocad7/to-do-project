import React from "react";
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs'
import './TodoIcon.css'

const iconType = {
    'check': color =>(<BsCheckCircleFill className="Icon-svg Icon-svg--check" fill={color} />),
    'delete': color =>(<BsXCircleFill className="Icon-svg Icon-svg--delete" fill={color} />),
};

function TodoIcon({type, color = 'gray', onClick}) {
   
    return(
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconType[type](color)}
        </span>
    )
}

export { TodoIcon };