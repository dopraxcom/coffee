import store from '../api/orders'
import { ActionTypes } from '../actionTypes'
import { Dispatch } from 'redux'
import { Action } from '../action'

export const fetchData = () => async (dispatch : Dispatch<Action>) => {
    const response = await store.get('/orders');
    dispatch({
        type:ActionTypes.FETCH_DATA, 
        payload:response.data
    })
}