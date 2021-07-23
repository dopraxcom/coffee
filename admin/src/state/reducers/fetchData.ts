import { Action } from '../action'
import { ActionTypes } from '../action-types' 


const initialState : Array<any> = [];

const fetchData = (state = initialState, action:Action) => {
    if(action.type === ActionTypes.FETCH_DATA){
        return action.payload;
    }
    return state;
}

export default fetchData;