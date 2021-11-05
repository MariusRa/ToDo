import React, {useState} from "react";

const Task = (props) => {
    const [title, setTitle] = useState(props.title)
    const clickHandler =()=>{
        console.log('clicked')
        setTitle("Updated")
    }
    return (
        <li className="list-group-item">
            <div className="todo-indicator bg-warning"></div>
            <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                    <div className="widget-content-left mr-2">
                        <div className="custom-checkbox custom-control">
                            <input className="custom-control-input" id="exampleCustomCheckbox" type="checkbox"/>
                            <label className="custom-control-label" htmlFor="exampleCustomCheckbox">&nbsp;</label>
                        </div>
                    </div>
                    <div className="widget-content-left">
                        <div className="widget-heading">{props.title}
                            <div className="badge badge-danger ml-2">{props.status}</div>
                        </div>
                        <div className="widget-subheading"><i>{props.created}</i>
                            <div className="badge badge-pill badge-info ml-2">{props.date}</div>
                        </div>
                    </div>
                    <div className="widget-content-right">
                        <button className="border-0 btn-transition btn btn-outline-success" onClick={clickHandler}>
                            <i className="fa fa-check"></i>
                        </button>
                        <button className="border-0 btn-transition btn btn-outline-danger">
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Task;
