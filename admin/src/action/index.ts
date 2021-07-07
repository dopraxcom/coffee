import store from '../api/orders'
import { FETCH_DATA } from '../store/actionTypes'

export const fetchData = () => async (dispatch:any) => {
    const response = await store.get('/orders');
    dispatch({type:FETCH_DATA, payload:response.data})
}