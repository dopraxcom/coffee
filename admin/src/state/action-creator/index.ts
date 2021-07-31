import { ActionTypes } from "../action-types"
import { Dispatch } from "redux"
import store from '../../api/orders'
import { Action } from '../action'
 

export const fetchData = () => {
    return async (dispatch: Dispatch<Action>) => {
        try{
            const result = await store.get('/orders');
            return dispatch({
                type: ActionTypes.FETCH_DATA,
                payload: result.data
            })  
        } catch (error) {
        }
    }
}

export const orderDetails = (data:Array<any> ,id:string) => {
    var details: Array<number | string> = []
    data.forEach(item => {
        if(item.orderID === id){
            details = item.order
        }
    })
    return ({
        type: ActionTypes.ORDER_DETAILS,
        payload:details 
    })
}


export const checkLoginAdmin = (loggedIn: boolean) => {
    return({
        type: ActionTypes.CHECK_LOGIN,
        payload: loggedIn
    })
}