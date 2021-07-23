import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { actionCreator , State } from '../../state';
import { useDispatch, useSelector } from 'react-redux'; 
import { bindActionCreators } from 'redux';

function SingleOrder () {

type OrdersDetailss = [
    {   Qty: number,
        cartPrice: number,
        cat: string,
        description: string,
        id: number,
        img: string 
        name: string,
        numer: number,
        price: number,
        ratio: number
        status: string,
        steamatetime:string,
        title:string,
    }
]
const dispatch = useDispatch();
const { fetchData , orderDetails } = bindActionCreators(actionCreator, dispatch);
const [orders , setOrders ] = useState<OrdersDetailss>();

type Quiz = {
    id : string
}
const { id } = useParams<Quiz>();
    useEffect(() => {
        const fetched = new Promise<any>((res) => {
            const data = fetchData();
            res(data)
        }) 
        fetched.then((value) => {
            const order = orderDetails(value.payload, id);
            // setOrders(order.payload);
            console.log(order.payload)
        })
    },[])
function renderOrder(){
    console.log()
}
    return(
        <>
        <h1>{id}</h1>
        {renderOrder()}
        </>
    )
}

export default SingleOrder;