import { createStore } from "redux";
import rootReducer from "./Components/Themes/reducer";

const localStorageKey = 'theme';
const savedTheme = localStorage.getItem(localStorageKey);

let initialState = {
    preferences: savedTheme ? JSON.parse(savedTheme) : {}
};

const store = createStore(rootReducer, initialState);

store.subscribe(()=>{
    const preferences = store.getState().preferences;
    if (!preferences) return;
    localStorage.setItem(localStorageKey, JSON.stringify(preferences));
})

export default store;