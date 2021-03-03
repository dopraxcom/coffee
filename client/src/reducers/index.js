import { combineReducers } from "redux";

export const addToCart =  (id =  null , action) => {
    if(action.type === 'ADD_TO_CART'){
        return action.payload;
    };
    return id;
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

