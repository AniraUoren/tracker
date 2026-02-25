import { createSlice }  from "@reduxjs/toolkit";

const Weekdays = { Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6, Sunday: 7 };
const Statuses = {Start: "start", Run: "run", Done: "done", Pending: "pending", Cancel: "cancel", None: ""};

const initialState = {
    tasks: [
        {id: 1, text: "test_start", weekday: 1, status: Statuses.Start},
        {id: 2, text: "test_run", weekday: 2, status: Statuses.Run},
        {id: 3, text: "test_done", weekday: 3, status: Statuses.Done},
        {id: 4, text: "test_pending", weekday: 4, status: Statuses.Pending},
        {id: 5, text: "test_cancel", weekday: 5, status: Statuses.Cancel},
        {id: 6, text: "test_none", weekday: 6, status: Statuses.None},
        {id: 7, text: "test_none", weekday: 7, status: Statuses.None}
    ],
}

export const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        //при добавлении задачи нужен только текст
        addTask: (state, action) => {
            state.tasks.push(
                {
                    id: state.tasks.length + 1,
                    text: action.payload,
                    weekday: undefined,
                    status: Statuses.None,
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