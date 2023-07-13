'use client'
import React, {FC} from 'react';
import {useAppSelector} from "@/app/hooks";
import {TypeFilter, TypeTodoItem} from "@/app/store/todoSlice";
import TodoItem from "@/app/components/todo/TodoItem";
import styles from './todo.module.css'

// Используется доп функция, прописанная ниже, она фильтрует список дел по необходимости
const TodoItems: FC = () => {
    const todos = useAppSelector(state => state.todo.todos)
    const filter = useAppSelector(state => state.todo.filter)

    return (
        <div className={styles.todo_items_container}>
            {getFilteredTodo(todos, filter).map(({id, text, executed}) => (
                <TodoItem key={id} id={id} text={text} executed={executed}/>
            ))}
        </div>
    );
};

export default TodoItems;


const getFilteredTodo = (todos: TypeTodoItem[], filter: TypeFilter): TypeTodoItem[] => {
    if (filter.onlyExecuted) return todos.filter(item => item.executed)
    if (filter.onlyUnexecuted) return todos.filter(item => !item.executed)
    return todos
}