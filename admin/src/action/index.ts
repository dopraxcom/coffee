import { ActionTypes } from '../actionTypes'


interface FetchDataAction {
    type: ActionTypes.FETCH_DATA
    payload: []
}

export type Action = FetchDataAction;
