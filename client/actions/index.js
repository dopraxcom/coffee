import store from '../apis/store';

export const createStore = (arg) => {
    return async (dispatch) => {
        store.post('/store' , arg)
    }
}