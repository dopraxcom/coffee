import { Action } from '../action'
import { ActionTypes } from '../actionTypes'


const EmptyArray:Array<any> = [];


const fetchData = (state:Array<any> = EmptyArray, action:Action) => {
    if(action.type === ActionTypes.FETCH_DATA){
        return action.payload;
    }
    return state;
}

export default fetchData;