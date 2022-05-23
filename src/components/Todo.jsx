import React from "react";
import firebase from "../utils/firebase";
import "../App.css";

function Todo({ todo }) {
    const removeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.remove();
    };

    const completeTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    };
    return (
        <div className="list-item">
            <h2 className={todo.complete ? "complete" : ""}>{todo.title}</h2>
            <button onClick={removeTodo}><img alt="Remove" src="src/images/remove-button.png"/></button>
            <button onClick={completeTodo}><img alt="Done" src="src/images/complete-button.png"/></button>
        </div>
    );
}

export default Todo;