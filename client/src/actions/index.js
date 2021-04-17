import store from '../apis/store';

export const fetchData = () =>  async dispatch => {
    const response = await store.get('/store');
    dispatch({type: 'FETCH_DATA', payload: response.data});
};


export const addToCart = (store = {}) =>  {
    return {
        type: 'ADD_TO_CART',
        payload: {...store }
    };
};

export const fetchRandom = () =>  async dispatch => {
    const response = await store.get('/store');
    dispatch({type: 'FETCH_RANDOM', payload: response.data});
};

export const finalPrice = (store={}) => {
    return {
        type: 'PRICE',
        payload: {...store}
    };
};
