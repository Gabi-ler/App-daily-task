import React from 'react'
import './TodoList.css'

function TodoList(props) {
    return (
        <div>
            <ul className='TodoList'>
                {props.children}
            </ul>
        </div>
    )
}

export { TodoList };