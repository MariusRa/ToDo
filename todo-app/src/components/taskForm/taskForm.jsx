import React, {useState} from "react";

function TaskForm(props) {
    const [userInput, setUserInput] = useState({
        'title': '',
        'status': '',
        'created':''
    })
    const titleHandler = (event)=> {
        setUserInput((prevState)=>{
            return {...prevState, title:event.target.value}
        })
    }
    const statusHandler = (event)=> {
        setUserInput((prevState)=>{
            return {...prevState, status:event.target.value}
        })
    }
    const creatorHandler = (event)=> {
        setUserInput((prevState)=>{
            return {...prevState, created:event.target.value}
        })
    }
    const clearInputs = ()=>{
        setUserInput(()=>{
            return {
                'title': '',
                'status': '',
                'created':''
            }
        })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const userInputId = {
            id:Math.random().toString(),
            ...userInput
        }
        props.onCreateTask(userInputId)
        clearInputs()
    }
    return (
        <form onSubmit={submitHandler}>
            <input
                id="inputList"
                className="inputToDo"
                type="text"
                placeholder="Enter Task!"
                value={userInput.title}
                onChange={titleHandler}
            />
            <input
                id="inputList"
                className="inputCreated"
                type="text"
                placeholder="Task Created"
                value={userInput.created}
                onChange={creatorHandler}
            />
            <select className="status" value={userInput.status} onChange={statusHandler}>
                <option value="open">Atvira</option>
                <option value="done" selected>Atlikta</option>
            </select>
            <input
                id="inputList"
                className="inputDate"
                type="text"
                placeholder="Task Date"
            />
            <button type="submit" className="btn btn-primary">TASK+</button>
        </form>
    );
}
export default TaskForm;
