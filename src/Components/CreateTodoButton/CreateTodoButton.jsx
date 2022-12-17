// import react from 'react'
import './CreateTodoButton.css'


const CreateTodoButton = (props) => {
    const onClickButton = ()=>{
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
         className={`TodoButtom ${!!props.loading && 'button--loading'}`}
         onClick={onClickButton}
         disabled={false}
        >
            +
        </button>
    )
}

export { CreateTodoButton };