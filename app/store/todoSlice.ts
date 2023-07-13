import {createSlice} from "@reduxjs/toolkit";

// Создание типов, не вынесено в отдельной директории, тк их мало
export type TypeTodoItem = {
    id: number,
    text: string,
    executed: boolean,
}
export enum Theme {
    dark = "DARK",
    light = "light",
}
export type TypeFilter = {
    onlyExecuted: boolean,
    onlyUnexecuted: boolean,
}

interface IInterface {
    isLoading: boolean,
    hasError: boolean,
    todos: TypeTodoItem[],
    theme: Theme,
    filter: TypeFilter,
}

// Создаём начальное состояние и тестовые данные, флаги загрузки и ошибки созданны на будущее
const initialState:IInterface = {
    isLoading: false,
    hasError: false,
    todos: [
        {id: 1, text: 'fists', executed: false},
        {id: 2, text: 'second', executed: true},
        {id: 3, text: 'third', executed: true},
        {id: 4, text: 'fourth', executed: false},
        ],
    theme: Theme.light,
    filter: {
        onlyExecuted: false,
        onlyUnexecuted: false,
    },
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push({
                id: state.todos[state.todos.length - 1].id + 1,
                text: action.payload,
                executed: false,
            })
        },
        toggleExecutedStatus(state, action) {
            state.todos.map( (item, index) => {
                if (item.id === action.payload) {
                    state.todos[index].executed = !state.todos[index].executed
                }
            })
        },
        deleteTodo(state, action) {
            state.todos.map( (item, index) => {
                if (item.id === action.payload) {
                    console.log(state.todos, index)
                    state.todos.splice(index, 1)
                }
            })
        },
        toggleTheme(state) {
            state.theme = state.theme === Theme.light ? Theme.dark : Theme.light
        },
        // переключение фильтров дублирует код, но выносить в отдельную функцию будет менее компактно
        toggleExecutedFilter(state) {
            if (!state.filter.onlyExecuted) {
                state.filter.onlyExecuted = true
                if (state.filter.onlyUnexecuted) state.filter.onlyUnexecuted = false
            }
            else state.filter.onlyExecuted = false
        },
        toggleUnexecutedFilter(state) {
            if (!state.filter.onlyUnexecuted) {
                state.filter.onlyUnexecuted = true
                if (state.filter.onlyExecuted) state.filter.onlyExecuted = false
            }
            else state.filter.onlyUnexecuted = false
        },
    }
})

export default todoSlice.reducer
export const {addTodo, toggleExecutedStatus, deleteTodo,toggleTheme,
    toggleExecutedFilter, toggleUnexecutedFilter} = todoSlice.actions





