import "./task-container.css";
import Task from "../task/task.jsx";
import CheckBox from "../check-box/check-box.jsx";

function TaskContainer({text}) {
    return(
        <div className="container">
            <Task text={text}/>
            <CheckBox/>
            <CheckBox/>
            <CheckBox/>
            <CheckBox/>
            <CheckBox/>
            <CheckBox/>
            <CheckBox/>
        </div>
    )
}

export default TaskContainer;