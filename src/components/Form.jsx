import React, { useState } from 'react';
import firebase from "../utils/firebase";
import '../App.css';

function Form() {

    const [title, setTitle] = useState("");

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    };

    const createTodo = () => {
        const todoRef = firebase.database().ref("Todo");
        const todo = {
            title,
            complete: false,
        };
        todoRef.push(todo);
        document.getElementById("clear").value="";
    };
    
    return (
        <div>
            <input id="clear" placeholder="Enter task" type="text" onChange={handleOnChange}/>
            <button className="add" onClick={createTodo}>Add</button>
        </div>
    );
}

export default Form;