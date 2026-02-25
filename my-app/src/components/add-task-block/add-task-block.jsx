import "./add-task-block.css";
import {useDispatch} from "react-redux";
import {addTask} from "../../slices/tasksSlice.js";

function AddTaskBlock() {
    const dispatch = useDispatch();

    const handleAddingTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            dispatch(addTask(e.target.value));
            e.target.value = ""
        }
    };
    return (
        <form action="#" className="addTask" onSubmit={event => event.preventDefault()}>
            <input type="text" placeholder="Введите текст задачи" className="addTask_input" id="textTask" onKeyPress={handleAddingTask}></input>
        </form>

    )
}

export default AddTaskBlock;