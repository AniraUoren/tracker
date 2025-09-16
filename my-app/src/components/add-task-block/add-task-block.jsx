import "./add-task-block.css";

function AddTaskBlock({createTask}) {
    const handleAddingTask = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            createTask(e.target.value);
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