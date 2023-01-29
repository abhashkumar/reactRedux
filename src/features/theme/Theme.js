import { useState } from "react"
import { useDispatch } from 'react-redux'
import { changeColor } from "./themeSlice"

const Theme = () => {
    const [color, setColor] = useState("black") 
    const dispatch = useDispatch()
    return (
    <>
    <input type = "text" onChange={ (e) =>{setColor(e.target.value) } }/>
    <button onClick={() => dispatch(changeColor(color))}>
    Change text color
    </button>
    <h1>{color}</h1>
    </>        
    )
}

export default Theme