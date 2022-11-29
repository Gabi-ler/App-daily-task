import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    function onClicButton() {
        props.setOpenModal(true)
    }
    
    return (
        <button className="StyleButton" onClick={onClicButton}>
        +
        </button>
    )
}

export {CreateTodoButton};