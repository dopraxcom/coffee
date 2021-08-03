import { Action } from '../action';
import { ActionTypes  } from '../action-types';

const initialState : boolean = false;

const checkLoginReducer = (state = initialState , action:Action) => {
    if(action.type === ActionTypes.CHECK_LOGIN){
        return action.payload;
    }
    return state;
}

export default checkLoginReducer;
