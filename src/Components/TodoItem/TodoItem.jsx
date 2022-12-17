import React from 'react'
import { CompleteIcon } from '../../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../../TodoIcon/DeleteIcon'
import './TodoItem.css'

const TodoItem = (props) => {
    // const onComplete = ()=>{
    //     alert(`Ya completaste el Todo "${props.text}"`);
    // }
    // const onDelete = ()=>{
    //     alert(`Borraste el Todo "${props.text}"`);
    // }
    return (
        <li className={`TodoItem ${!!props.loading && 'TodoItem--loading'}`}>
            {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}>
                ☑
            </span> */}
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>{props.text}</p>

            {/* <span className='Icon Icon-delete'
            onClick={props.onDelete}>
                ☒
            </span> */}
            <DeleteIcon 
                onDelete={props.onDelete}
            />
        </li>
    )
}

export { TodoItem }