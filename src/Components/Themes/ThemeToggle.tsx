import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "./actions";
import store from "../../store";

const getWord = function(){
    if (store.getState().preferences.darkThemeEnabled)
        return "light";
    else return "dark";
}

const DarkThemeToggle = () => {
    const darkThemeEnabled = useSelector((state:any) => state.preferences.darkThemeEnabled);
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type="checkbox"
                checked={darkThemeEnabled}
                onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
            />
            <span>Use {getWord()} theme</span>
        </div>
    );
};

export default DarkThemeToggle;