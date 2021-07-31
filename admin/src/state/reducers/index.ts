import { combineReducers } from "redux";
import fetchData from "./fetchData";
import checkLoginReducer from "./checkLogin";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    orders  : fetchData,
    form    : formReducer,
    loggedIn: checkLoginReducer,   
})

export default reducers;

export type State = ReturnType<typeof reducers>