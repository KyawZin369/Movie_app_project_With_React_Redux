import { combineReducers } from "redux";
import { movieReducer } from "./movie";

const combineReducer = combineReducers({
    movies : movieReducer
})

export default combineReducer;