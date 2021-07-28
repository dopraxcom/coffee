import { combineReducers } from "redux";
import fetchData from "./fetchData";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    orders : fetchData,
    form   : formReducer   
})

export default reducers;

export type State = ReturnType<typeof reducers>