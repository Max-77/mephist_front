import { createStore } from "redux";
import rootReducer from "./Components/Themes/reducer";

let initialState = {};

const store = createStore(rootReducer, initialState);
export default store;