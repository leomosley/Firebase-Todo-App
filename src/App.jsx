import React from "react";
import Form from "./components/Form";
import List from "./components/List";
import './App.css';

function App() {
    
    return (
        <main>
            <div className="App">
                <h1>Todo<hr></hr></h1>
                <Form />
            </div>
            <List />
        </main>
    );
}

export default App;