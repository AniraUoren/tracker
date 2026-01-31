import {useState} from 'react'
import './App.css'
import TaskContainer from "./components/task-container/task-container.jsx";
import AddTaskBlock from "./components/add-task-block/add-task-block.jsx";

function App() {
    const [taskList, setTasklist] = useState([{text: "test", weekday: "mon", status: null}]);
    const [isTaskListEmpty, setIsTaskListEmpty] = useState(false);

    function createTask(text) {
        setTasklist(prevState => [...prevState, {text: text, weekday: null, status: null}]);
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
                {!isTaskListEmpty ? (<TaskContainer text={taskList[0].text}/>) : (<p className="addFirstTask">Добавить первую задачу</p>)}
            </div>
        </>
    );
}

export default App
