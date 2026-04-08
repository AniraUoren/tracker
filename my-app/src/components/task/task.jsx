import Styles from "./task.module.css";

import {useMemo, useState} from "react";
import "../../assets/edit.svg";
import Mark from "../mark/mark.jsx";

function Task({text, changeText, changeType}) {
    const [isEditFieldVisible, setIsEditFieldVisible] = useState(false);
    const [taskText, setTaskText] = useState(text);

    const handleChangeTaskText = (evt) => {
        setTaskText(evt.target.value);
    }

    function editTask() {
        setIsEditFieldVisible(true);
    }

    function handleKeyPress(evt) {
        if (evt.key === 'Enter') {
            changeText(taskText);
            setIsEditFieldVisible(false);
        }
    }

    function handleConfirmBtn() {
        changeText(taskText);
        setIsEditFieldVisible(false)
    }

    function handleSelectType(newType) {
        changeType(newType);
    }

    return (
        <div className={Styles.taskContainer}>
            <div className={Styles.taskContainer}>
                <p className={isEditFieldVisible !== true ? `${Styles.task}` : `${Styles.task} ${Styles.task_enable}`}>{text}</p>
                <div className={Styles.markContainer}>{isEditFieldVisible ? <Mark typeSelect={handleSelectType}/> : ""}</div>
                <input type="text"
                       value={taskText}
                       onChange={handleChangeTaskText}
                       onKeyDown={handleKeyPress}
                       className={isEditFieldVisible !== true ? `${Styles.editTaskField}` : `${Styles.editTaskField} ${Styles.editTaskField_enable}`}/>
            </div>
            <button type="button" className={isEditFieldVisible !== true ? `${Styles.editButton}` : `${Styles.editButton} ${Styles.editButton_disable}`} onClick={editTask}>Изменить</button>
            <button type="button" className={isEditFieldVisible !== true ? `${Styles.confirmButton}` : `${Styles.confirmButton} ${Styles.confirmButton_enable}`} onClick={handleConfirmBtn}></button>
        </div>
    );
}

export default Task;