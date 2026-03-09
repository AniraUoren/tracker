import Styles from "./task.module.css";

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
        <div className={Styles.taskContainer}>
            <div className={Styles.taskContainer}>
                <p className={isEditFieldVisible !== true ? `${Styles.task}` : `${Styles.task} ${Styles.task_enable}`}>{text}</p>
                <input type="text"
                       value={text}
                       onChange={evt => changeText(evt.target.value)}
                       onKeyDown={handleKeyPress}
                       className={isEditFieldVisible !== true ? `${Styles.editTaskField}` : `${Styles.editTaskField} ${Styles.editTaskField_enable}`}/>
            </div>
            <button type="button" className={isEditFieldVisible !== true ? `${Styles.editButton}` : `${Styles.editButton} ${Styles.editButton_disable}`} onClick={editTack}>Изменить</button>
            <button type="button" className={isEditFieldVisible !== true ? `${Styles.confirmButton}` : `${Styles.confirmButton} ${Styles.confirmButton_enable}`} onClick={handleConfirmBtn}></button>
        </div>
    );
}

export default Task;