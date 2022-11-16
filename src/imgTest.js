import logo from './logo.svg'

const Div = ()=> {
    return(
        <div className="container">
            <img src={logo}></img>
            <p>Lorem ipsum</p>
        </div>
    )
}

const Pic = ()=> {
    return (
        <Div />
    )
}

export default Pic;