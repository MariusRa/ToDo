import React, {useState} from "react";
import Task from "../task/task";
import initialTasks from "../../data/data"
import TaskForm from "../taskForm/taskForm";

function Tasks() {
    const[tasksList,setTask] = useState(initialTasks)
    const addTaskHandler = (task)=>{
        setTask(prevState=> {
            return [task,...prevState]
        })
    }
    const staticTasks = tasksList.map(
        task => <Task id={task.id}
                      title={task.title}
                      created={task.created}
                      status={task.status}
                      date={task.date}
        />)
    return (
        <div className="col-md-8">
            <div className="card-hover-shadow-2x mb-3 card">
                <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                    <i className="fa fa-tasks"></i>&nbsp;Tasks
                </div>
                <TaskForm onCreateTask = {addTaskHandler}/>
                <div className="card-header-tab card-header">
                    <div className="card-header-title font-size-lg text-capitalize font-weight-normal">
                        <i className="fa fa-tasks"></i>&nbsp;To Do List
                    </div>
                </div>
                <div className="scroll-area-sm">
                    <perfect-scrollbar className="ps-show-limits">
                        <div style={{position: 'static'}} className="ps ps--active-y">
                            <div className="ps-content">
                                <ul className=" list-group list-group-flush">
                                    {staticTasks}
                                </ul>
                            </div>
                        </div>
                    </perfect-scrollbar>
                </div>

                <div class="d-block text-right card-footer">
                    <button class="mr-2 btn btn-link btn-sm">Cancel</button>
                    <button class="btn btn-primary">Add Task</button>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
