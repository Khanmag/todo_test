import {FormEventHandler, useState} from "react";
import {addTodo} from "@/app/store/todoSlice";
import {useAppDispatch} from "@/app/hooks";
import styles from './todo.module.css'
import Image from "next/image";
import add_btn_image from '../../static/btns/add_btn.png'

const TodoCreator = () => {
    const [userValue, setUserValue] = useState('')
    const dispatch = useAppDispatch()
    const addTodoFromForm:FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (userValue) {
            dispatch(addTodo(userValue))
            setUserValue('')
        }
    }
    return (
        <form onSubmit={addTodoFromForm} className={styles.add_todo_form}>
            <input type='text' value={userValue} onChange={(e) => setUserValue(e.target.value)}/>
            <button type='submit'>
                <Image src={add_btn_image} alt={'add btn image'} />
            </button>
        </form>
    );
};

export default TodoCreator;