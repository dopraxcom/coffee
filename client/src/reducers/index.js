import { combineReducers } from "redux";
// import _ from 'lodash';

export const addToCartReducer =  (obj=[] , action) => {
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

export const fetchRandomReducer = (store = [],action) => {
    if(action.type === 'FETCH_RANDOM'){
        let rndData = new Set([]);
        rndData = action.payload;
        let rnd = [];
        for (let index = 0; index < 10; index++) {
            rnd.push(rndData[Math.floor(Math.random() * rndData.length)]); 
        }
        return rnd;

    };
    return store;
};

export const finalPriceReducer = (price = [] , action) => {
    if(action.type === 'PRICE'){
        return [...price ,action.paylaod]
    };
    return price;
};

export default combineReducers({    
    addToCart   : addToCartReducer,
    fetchData   : fetchDataReducer,
    fetchRandom : fetchRandomReducer,
    finalPrice  : finalPriceReducer,
});

