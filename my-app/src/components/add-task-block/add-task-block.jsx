import Styles from "./add-task-block.module.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../slices/tasksSlice.js";
import Mark from "../mark/mark.jsx";
import {useState} from "react";
import ErrorMessage from "../error-message/error-message.jsx";

function AddTaskBlock() {
    const dispatch = useDispatch();
    let newTask = {statuses:{}}
    const [typeEnterError, setTypeEnterError] = useState(false);

    const handleSelectTaskType = (type) => {
      newTask.type = type;
    }

    const handleAddingTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            if (!newTask.type)
            {
                console.log("no")
                setTypeEnterError(true);
                return;
            }
            setTypeEnterError(false);
            newTask.text = e.target.value;
            dispatch(addTask(newTask));
            e.target.value = "";
            newTask = {statuses:{}};
            console.log(newTask)
        }
    };
    return (
        <form action="#" className={Styles.addTask} onSubmit={event => event.preventDefault()}>
            <Mark typeSelect={handleSelectTaskType}/>
            <input type="text" placeholder="Введите текст задачи" className={Styles.addTask_input} id="textTask"
                   onKeyDown={handleAddingTask}></input>
            {typeEnterError ? <ErrorMessage errorMessage={"Нужно указать тип задачи"}/> : null}
        </form>

    )
}

export default AddTaskBlock;