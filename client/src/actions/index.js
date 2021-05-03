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

export const finalPrice = (price=0) => {
    return {
        type: 'PRICE',
        payload: price
    };
};

export const deleteItem = (row = 0 , store=[] ) => {
    const data = [row , [...store]];  
    console.log('Action data: ',data);
    return {
        type    : 'DELETE',
        payload : data
    };
};
