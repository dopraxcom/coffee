import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../../state';
import { useEffect, useState } from 'react';
import { DataGrid, GridRowModel } from '@material-ui/data-grid';
import { keys } from '@material-ui/core/styles/createBreakpoints';

interface ORDER {
    order: string
}

interface OrderItem {
    id: number,
    orderID: string,
    order:[
        {
            Qty: number,
            cartPrice: number,
            cat: string,
            description: string,
            id: number,
            img: string,
            name: string,
            numer: number,
            price: number,
            ratio: number,
            status: string,
            steamatetime: string,
            title: string,
        }
    ]
}

let arr = [];
let product = {} as OrderItem;

function Orders () {
    const [orderID, setOrderID] = useState<ORDER>()
    const dispatch = useDispatch();
    const { fetchData }  = bindActionCreators(actionCreator, dispatch);
    const state = useSelector((state: State) => state.orders);

useEffect(() => {
    // if [], run once when row LocalDrinkSharp, and dont run again
    const fetched = new Promise<any>((res) => {
        const orderss = fetchData()
        res(orderss)
    })

    fetched.then ((value => {
        let response = value.payload;
        return data(response)
    }))
},[])

function data(response : Array<any>) {
    response.map((item, key) => {
        setOrderID(item)
        console.log(item.id , item.orderID)
    })
}

console.log(state)
    return(
        <div dir="">
            <div style={{ height: 250, width: '100%' }}>
                <DataGrid
                    columns={[{ field: 'name' }]}
                    rows={
                    [
                               
                    ] as GridRowModel[]
                    }
                />
            </div>
        </div>
    );
};
export default Orders;