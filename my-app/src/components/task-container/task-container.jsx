import "./task-container.css";
import Task from "../task/task.jsx";
import CheckBox from "../check-box/check-box.jsx";

function TaskContainer({task, setTasklist}) {
    function handelChangeStatus (newStatus) {
        task.status = newStatus;
        console.log(task);
        setTasklist(prevState => prevState.map(task => task.id === task.id ? task : task));
    }
    return(
        <div className="container">
            <Task text={task.text}/>
            <CheckBox status={task.weekday === 1 ? task.status : ""} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.weekday === 2 ? task.status : ""} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.weekday === 3 ? task.status : ""} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.weekday === 4 ? task.status : ""} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.weekday === 5 ? task.status : ""} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.weekday === 6 ? task.status : ""} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.weekday === 7 ? task.status : ""} changeStatus={handelChangeStatus}/>
        </div>
    )
}

export default TaskContainer;