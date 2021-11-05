import React from "react";
import './app.css';
import Tasks from "../tasks/tasks";


const App = () => {
    return (
        <div className="row d-flex justify-content-center container">
            <Tasks/>
        </div>
    );
}

export default App;
