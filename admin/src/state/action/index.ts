import { ActionTypes } from '../action-types'

interface fetchDataAction {
    type   : ActionTypes.FETCH_DATA
    payload: Array<object>
}

interface deleteOderAction {
    type   : ActionTypes.DELETE_ORDER
    payload: Array<object>
}

interface orderDetails {
    type   : ActionTypes.ORDER_DETAILS
    payload: Array<object>
}

interface checkLogin {
    type   : ActionTypes.CHECK_LOGIN
    payload: boolean 
}

export type Action = fetchDataAction | deleteOderAction | orderDetails | checkLogin;