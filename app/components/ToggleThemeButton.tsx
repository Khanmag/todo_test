import React, {FC} from 'react';
import {Theme, toggleTheme} from "@/app/store/todoSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";
import Image from "next/image";
import dark_theme_img from '../static/btns/btn_dark.png'
import light_theme_img from '../static/btns/btn_light.png'


const ToggleThemeButton:FC = () => {
    const isThemeLight = useAppSelector(state => state.todo.theme) === Theme.light
    const dispatch = useAppDispatch()
    const btnClick = ():void => {
        dispatch(toggleTheme())
    }
    return (
        <button onClick={btnClick} className='toggle_theme_btn'>
            {
                isThemeLight
                    ? <Image src={dark_theme_img} alt={'dark btn'}/>
                    : <Image src={light_theme_img} alt={'dark btn'}/>
            }
        </button>
    );
}

export default ToggleThemeButton;