import "./task.css";

import {useState} from "react";
import "../../assets/edit.svg";

function Task({text}) {
    const [taskText, setTaskText] = useState(text);
    const [isEditFieldVisible, setIsEditFieldVisible] = useState(false);

    function editTack() {
        setIsEditFieldVisible(true);
    }

    function handleKeyPress(evt) {
        if (evt.key === 'Enter') {
            setIsEditFieldVisible(false);
        }
    }

    function handleConfirmBtn() {
        setIsEditFieldVisible(false)
    }

    return (
        <div className={"taskContainer"}>
            <div className="taskContainer">
                <p className={isEditFieldVisible !== true ? "task" : "task task_enable"}>{taskText}</p>
                <input type="text"
                       value={taskText}
                       onChange={evt => setTaskText(evt.target.value)}
                       onKeyDown={handleKeyPress}
                       className={isEditFieldVisible !== true ? "editTaskField" : "editTaskField editTaskField_enable"}/>
            </div>
            <button type="button" className={isEditFieldVisible !== true ? "editButton" : "editButton editButton_disable"} onClick={editTack}>Изменить</button>
            <button type="button" className={isEditFieldVisible !== true ? "confirmButton" : "confirmButton confirmButton_enable"} onClick={handleConfirmBtn}></button>
        </div>
    );
}

export default Task;