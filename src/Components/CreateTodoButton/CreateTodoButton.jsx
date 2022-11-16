// import react from 'react'
import './CreateTodoButton.css'


const CreateTodoButton = (props) => {
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
         className='TodoButtom'
         onClick={onClickButton}
        >
            +
        </button>
    )
}

export { CreateTodoButton };