import "./task-container.css";
import Task from "../task/task.jsx";
import CheckBox from "../check-box/check-box.jsx";
import {useDispatch} from "react-redux";
import {editTask} from "../../slices/tasksSlice.js";

function TaskContainer({task}) {
    const dispatch = useDispatch();

    function handelChangeStatus (newStatus) {
        dispatch(editTask(
            {
                id: task.id,
                key:"status",
                value: newStatus
            }
        ))
    }

    function handleChangeText(newText) {
        dispatch(editTask(
            {
                id: task.id,
                key:"text",
                value: newText
            }
        ))
    }

    return(
        <div className="container">
            <Task text={task.text} changeText={handleChangeText}/>
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