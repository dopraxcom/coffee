import { combineReducers } from "redux";
import fetchData  from "./fetchData";


const reducers = combineReducers({
    store: fetchData 
})


export default reducers;