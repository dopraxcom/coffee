import { combineReducers } from "redux";

export const addToCart =  (obj=[] , action) => {
    if(action.type === 'ADD_TO_CART'){
        return [...obj , action.payload];
    };
    return obj;
};

export const fetchDataReducer = (store = [],action) => {
    if(action.type === 'FETCH_DATA'){
        return  action.payload;
    };
    return store;
};


export default combineReducers({    
    addToCart,
    fetchData : fetchDataReducer
});

