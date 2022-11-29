import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    function onSearchValueChange(event) {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return(
        <input className="TodoSearch" placeholder="Manzana" value={searchValue} onChange={onSearchValueChange}/>       
    );
}

export {TodoSearch};