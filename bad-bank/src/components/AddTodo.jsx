
import React from "react";
import { useState } from "react";

const AddTodo=(props) =>{
    const[item,setItem] = useState("")
    const handleChange = (e) =>{
        setItem(e.target.value)
    }
       const handleSubmit =(e) =>{
        e.preventDefault()
        props.item(item)
       }
       return(
        <form method="post" onSubmit={handleSubmit}>
            <input type="text" name="item" value={item} onChange={handleChange} placeholder="Enter Todo"/>
            <button type="submit">Add</button>
        </form>
       )
}
export  default AddTodo