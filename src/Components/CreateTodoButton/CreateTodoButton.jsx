// import react from 'react'
import './CreateTodoButton.css'


const CreateTodoButton = (props) => {
    const onClickButton = ()=>{
        const keyHandler = (e)=>{
            if(e.key === 'Escape'){
                props.setOpenModal(false)
                document.removeEventListener('keydown', keyHandler);
            }
        }
        document.addEventListener('keydown', keyHandler);
        props.setOpenModal(prevState => !prevState)
    }
    return (
        <button
         className={`TodoButtom ${!!props.loading && 'button--loading'} ${props.openModal && 'rotateContent'}`}
         onClick={onClickButton}
         disabled={false}
        >
            +
        </button>
    )
}

export { CreateTodoButton };