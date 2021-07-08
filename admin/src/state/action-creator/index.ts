import { ActionTypes } from "../action-types"
import { Dispatch } from "redux"
import store from '../../api/orders'
import { Action } from '../action'

export const fetchData = () => {
    return async (dispatch: Dispatch<Action>) => {
        const result = await store.get('/orders');
        dispatch({
            type: ActionTypes.FETCH_DATA,
            payload: result.data
        })
    }
}