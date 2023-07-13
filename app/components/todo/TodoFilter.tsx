import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import {toggleExecutedFilter, toggleUnexecutedFilter} from "@/app/store/todoSlice";
import styles from './todo.module.css'


const TodoFilter:FC = () => {
    const filterOptions = useAppSelector(state => state.todo.filter)
    const dispatch = useAppDispatch()
    return (
        <form className={styles.filter_form}>
            <label>
                <input
                    type={"checkbox"}
                    checked={filterOptions.onlyExecuted}
                    onChange={() => dispatch(toggleExecutedFilter())}
                />
                <span>только выполненные</span>
            </label>
            <label >
                <input
                    type={"checkbox"}
                    checked={filterOptions.onlyUnexecuted}
                    onChange={() => dispatch(toggleUnexecutedFilter())}
                />
                <span>только не выполненные</span>
            </label>
        </form>
    );
}

export default TodoFilter;