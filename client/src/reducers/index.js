import { combineReducers } from "redux";
import _ from 'lodash';

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


export const deleteItemReducer = (data = [], action) => {
    var keyObj = 0;
    if(action.type === 'DELETE'){
        // _.omit(action.payload[1][1].id )
        _.forEach(action.payload[1], function ( obj, key ){
            if(obj.id === _.parseInt(action.payload[0])){
                // _.remove(action.payload[1], obj);
                keyObj = key;
            };
            // return action.paylaod[1];
        });
        return action.payload[1].splice(index,keyObj);
       
    };
    return data;
};

export default combineReducers({    
    addToCart   : addToCartReducer,
    fetchData   : fetchDataReducer,
    fetchRandom : fetchRandomReducer,
    finalPrice  : finalPriceReducer,
    deletItem   : deleteItemReducer
});

