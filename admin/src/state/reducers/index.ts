import { combineReducers } from "redux";
import fetchData from "./fetchData";

const reducers = combineReducers({
    orders : fetchData
})

export default reducers;

export type State = ReturnType<typeof reducers>