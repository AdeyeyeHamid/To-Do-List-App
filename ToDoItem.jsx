import React from "react";


const ToDoItem = (props)=>{
    return(
        <div onClick={()=>props.onChecked(props.id)}>
            <ul>
            <li>{props.text}</li>

            </ul>
            
        </div>
    )
}

export default ToDoItem