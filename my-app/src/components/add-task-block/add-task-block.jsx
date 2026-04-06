import Styles from "./add-task-block.module.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../slices/tasksSlice.js";
import Mark from "../mark/mark.jsx";

function AddTaskBlock() {
    const dispatch = useDispatch();

    const newTask = {statuses:{}}

    const handleSelectTaskType = (type) => {
      newTask.type = type;
    }

    const handleAddingTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            newTask.text = e.target.value;
            dispatch(addTask(newTask));
            e.target.value = ""
            console.log(newTask)
        }
    };
    return (
        <form action="#" className={Styles.addTask} onSubmit={event => event.preventDefault()}>
            <Mark typeSelect={handleSelectTaskType}/>
            <input type="text" placeholder="Введите текст задачи" className={Styles.addTask_input} id="textTask"
                   onKeyPress={handleAddingTask}></input>
        </form>

    )
}

export default AddTaskBlock;