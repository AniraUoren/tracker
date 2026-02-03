import "./task.css";

import {useState} from "react";
import "../../assets/edit.svg";

function Task({text, changeText}) {
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
                <p className={isEditFieldVisible !== true ? "task" : "task task_enable"}>{text}</p>
                <input type="text"
                       value={text}
                       onChange={evt => changeText(evt.target.value)}
                       onKeyDown={handleKeyPress}
                       className={isEditFieldVisible !== true ? "editTaskField" : "editTaskField editTaskField_enable"}/>
            </div>
            <button type="button" className={isEditFieldVisible !== true ? "editButton" : "editButton editButton_disable"} onClick={editTack}>Изменить</button>
            <button type="button" className={isEditFieldVisible !== true ? "confirmButton" : "confirmButton confirmButton_enable"} onClick={handleConfirmBtn}></button>
        </div>
    );
}

export default Task;