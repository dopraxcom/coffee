import store from '../apis/store';

export const createStore = (arg) => {
    return async (dispatch) => {
        store.post('/store' , arg)
    };
};

export const fetchData = () =>  async dispatch => {
    const response = await store.get('/store');
    dispatch({type: 'FETCH_DATA', payload: response.data});
};

