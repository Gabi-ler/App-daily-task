import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addTodo,
        setOpenModal
    } = React.useContext(TodoContext)
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const onCancel = () => {
        setOpenModal(false)
    }

    const onSumbit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
    }

    return (
        <form onSubmit={onSumbit}>
            <label>Escribe tu nueva tarea</label>
            <textarea value= {newTodoValue} onChange={onChange} placeholder="Cortar la cebolla para el almuerzo"></textarea>
            <div className="TodoForm-container">
                <button type="button" className="TodoForm cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="Todoform add" onClick={onSumbit}>Añadir Tarea</button>
            </div>
        </form>
    )
}

export { TodoForm }