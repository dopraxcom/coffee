import { ActionTypes } from '../action-types'

interface fetchDataAction {
    type: ActionTypes.FETCH_DATA
    payload: Array<object>
}
interface deleteOderAction {
    type: ActionTypes.DELETE_ORDER
    payload: Array<object>
}
export type Action = fetchDataAction | deleteOderAction;