'use client'
import {useAppSelector} from "@/app/hooks";
import TodoCreator from "@/app/components/todo/TodoCreator";
import TodoFilter from "@/app/components/todo/TodoFilter";
import TodoItems from "@/app/components/todo/TodoItems";
import {Theme} from "@/app/store/todoSlice";
import styles from './todo.module.css'



export default function TodoList() {
    const isThemeLight = useAppSelector(state => state.todo.theme) === Theme.light
    const currentTheme = isThemeLight ? styles.light_theme : styles.dark_theme
    return (
            <section className={`${styles.todo_wrapper} ${currentTheme}`}>
                <TodoFilter />
                <TodoCreator />
                <TodoItems />
            </section>
    )
}



