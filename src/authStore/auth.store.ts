import {createStore} from "redux";
import authReducer from "./authReducer";

const localStorageKey = 'login';
const isLogged = localStorage.getItem(localStorageKey);
let initialState = {
    logged : isLogged?JSON.parse(isLogged):''
};
const authStore = createStore(authReducer, initialState);

authStore.subscribe(()=>{
    const logged = authStore.getState();
    if (!logged) return;
    localStorage.setItem(localStorageKey,JSON.stringify(logged));
})

export default authStore;