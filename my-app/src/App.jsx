import {useState} from 'react'
import './App.css'
import TaskContainer from "./components/task-container/task-container.jsx";
import AddTaskBlock from "./components/add-task-block/add-task-block.jsx";

function App() {
    const Weekdays = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7 };
    const Statuses = {Start: "start", Run: "run", Done: "done", Pending: "pending", Cancel: "cancel", None: ""};

    const [taskList, setTasklist] = useState([
        // тестовые данные
        {id: 1, text: "test_start", weekday: 1, status: Statuses.Start},
        {id: 2, text: "test_run", weekday: 2, status: Statuses.Run},
        {id: 3, text: "test_done", weekday: 3, status: Statuses.Done},
        {id: 4, text: "test_pending", weekday: 4, status: Statuses.Pending},
        {id: 5, text: "test_cancel", weekday: 5, status: Statuses.Cancel},
        {id: 6, text: "test_none", weekday: 6, status: Statuses.None},
        {id: 7, text: "test_none", weekday: 7, status: Statuses.None}
    ]);

    function createTask(text) {
        setTasklist(prevState => [...prevState, {text: text, weekday: Weekdays.Monday, status: Statuses.None}]);
        setIsTaskListEmpty(false);

    }

    return (
        <>
            <h1>Очередной трекер</h1>
            <div className="block">
                <AddTaskBlock createTask={createTask}/>
                <div className="tasks-head">
                    <div></div>
                    <p className="day-name">Пн</p>
                    <p className="day-name">Вт</p>
                    <p className="day-name">Ср</p>
                    <p className="day-name">Чт</p>
                    <p className="day-name">Пт</p>
                    <p className="day-name">Сб</p>
                    <p className="day-name">Вс</p>
                </div>
                {Array.isArray(taskList) && taskList.length > 0 ?
                    (taskList.map((task) => { return <TaskContainer task={task} setTasklist={setTasklist} key={task.id} />})) :
                    (<p className="addFirstTask">Добавить первую задачу</p>)}
            </div>
        </>
    );
}

export default App
