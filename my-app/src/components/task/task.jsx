import "./task.css";
import {useState} from "react";

function Task({text}) {
    const [taskText, setTaskText] = useState(text);
    return (
        <p className="task">{taskText}</p>
    );
}

export default Task;