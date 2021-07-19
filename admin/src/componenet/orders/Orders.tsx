import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreator, State } from '../../state';
import { useEffect, useState } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import {
    List,
    ListItem,
    ListItemText,
    Divider
} from '@material-ui/core';


interface ORDER {
    order: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

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
    const classes = useStyles();

useEffect(() => {
    // if [], run once when row LocalDrinkSharp, and dont run again
    const fetched = new Promise<any>((res) => {
        const orderss = fetchData()
        res(orderss)
    })

    fetched.then ((value => {
        let response = value.payload;
        setOrderID(response)
    }))
},[])


function data(response : Array<any>) {
    response.map((item, key) => {
        return(
            <>
            {/* <ListItem button>
                <ListItemText primary="{item.orderID}" />
            </ListItem>
            <Divider /> */}<>hi</>
            </>
        )
    })
}

function render() : any {
    return state.map((item) => {
        return(
            <>
                <ListItem button>
                    <ListItemText primary={item.orderID} />
                </ListItem>
                <Divider />
            </>
        )
        // console.log(item.orderID)
    })
}

// console.log(state)
    return(
        <div dir="">
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                {render()}
            </List>
        </div>
    );
};
export default Orders;