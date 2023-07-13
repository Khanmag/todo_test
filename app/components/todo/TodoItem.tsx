import React, {FC} from 'react';
import {deleteTodo, toggleExecutedStatus, TypeTodoItem} from "@/app/store/todoSlice";
import styles from './todo.module.css'
import {useAppDispatch} from "@/app/hooks";
import Image from "next/image";
import delete_btn from '../../static/btns/delete_btn.png'


const TodoItem:FC<TypeTodoItem> = ({id, text, executed}) => {
    const completedStyle = executed ? styles.completed : ''
    const dispatch = useAppDispatch()
    const onItemClick = () => {
        dispatch(toggleExecutedStatus(id))
    }
    const  deleteTodoItem = () => {
        dispatch(deleteTodo(id))
    }
    return (
        <div className={`${completedStyle} ${styles.todo_item}`} onClick={onItemClick}>
            <span>{text}</span>
            <button onClick={deleteTodoItem}>
                <Image src={delete_btn} alt={'delete btn'} />
            </button>
        </div>
    );
};

export default TodoItem;