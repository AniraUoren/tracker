import {createSlice} from "@reduxjs/toolkit";

const Weekdays = {Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7};
const Statuses = {Start: "start", Run: "run", Done: "done", Pending: "pending", Cancel: "cancel", None: ""};
const TypesOfTasks = {Home: "home", Work: "work", Family: "family", Hobby: "hobby"};

const initialState = {
    /**
     * Структура задачи ожидается следующая:
     * @param id {number} - ид задачи
     * @param type {string} - тип задачи из TypesOfTasks
     * @param text {string} - текст задачи
     * @param statuses {array} - массив статусов по дням недели
     * @param statuses[i].weekday {number} - день недели
     * @param statuses[i].status {string} - статус в этот день
     */
    tasks: [
        {
            id: 1,
            type: TypesOfTasks.Hobby,
            text: "3000 xx",
            statuses: {
                [Weekdays.Saturday]: Statuses.Pending,
                [Weekdays.Sunday]: Statuses.Start
            }
        },
        {
            id: 2,
            type: TypesOfTasks.Work,
            text: "Wow",
            statuses: {
                [Weekdays.Saturday]: Statuses.Run
            }
        },
    ],
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(
                {
                    id: state.tasks.length + 1,
                    type: action.payload.type,
                    text: action.payload.text,
                    statuses: {}
                }
            )
        },
        //при правке задачи нужно найти нужную по id и отредачить значение по ключу
        // id - id меняемой задачи
        // key - ключ меняемого поля
        // value - новое значение поля
        //
        editTask: (state, action) => {
            if (state.tasks.some(task => task.id === action.payload.id)){
                state.tasks.map(task => task.id === action.payload.id ? task[action.payload.key] = action.payload.value : null);
            } {}
        },
        // TODO ищем по id задачу и затираем
        // deleteTask: (state, action) => {},
    }
})

export const {addTask, editTask, deleteTask} = tasksSlice.actions;
export default tasksSlice.reducer;