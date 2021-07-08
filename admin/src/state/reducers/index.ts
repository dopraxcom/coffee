import { combineReducers } from "redux";
import fetchData from "./fetchData";

const reducers = combineReducers({
    orders : fetchData
})

export default reducers;