import Styles from "./task-container.module.css";
import Task from "../task/task.jsx";
import CheckBox from "../check-box/check-box.jsx";
import {useDispatch} from "react-redux";
import {editTask} from "../../slices/tasksSlice.js";
import {useEffect, useState} from "react";

function TaskContainer({task}) {
    const dispatch = useDispatch();
    const [statuses, setStatuses] = useState({});

    function handelChangeStatus (newStatus, day) {
        dispatch(editTask(
            {
                id: task.id,
                key:"statuses",
                value: {...task.statuses,
                [day]: newStatus}
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
        // TODO Сделать так, чтобы по клику на день недели проставлялся день и отрабатывал стиль
        <div className={Styles.container}>
            <Task text={task.text} changeText={handleChangeText}/>
            <CheckBox status={task.statuses[1] ? task.statuses[1] : ""} day={1} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.statuses[2] ? task.statuses[2] : ""} day={2} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.statuses[3] ? task.statuses[3] : ""} day={3} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.statuses[4] ? task.statuses[4] : ""} day={4} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.statuses[5] ? task.statuses[5] : ""} day={5} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.statuses[6] ? task.statuses[6] : ""} day={6} changeStatus={handelChangeStatus}/>
            <CheckBox status={task.statuses[7] ? task.statuses[7] : ""} day={7} changeStatus={handelChangeStatus}/>
        </div>
    )
}

export default TaskContainer;