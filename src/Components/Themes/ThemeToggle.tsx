import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "./actions";
import s from './Toggle.module.scss'

const DarkThemeToggle = () => {
    const darkThemeEnabled = useSelector((state:any) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();

    return (
            <div className={s.checkcross}>
                <input id={s.checkcross}
                       type="checkbox"
                       checked={darkThemeEnabled}
                       onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}/>
                <label className={s["toggle-item"]} htmlFor={s.checkcross}>
                <div className={s.check}> </div>
                </label>
            </div>
    );
};

export default DarkThemeToggle;