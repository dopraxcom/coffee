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
    Divider,
} from '@material-ui/core';
import { Link, useParams } from 'react-router-dom'


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

function Orders () {
    const [orderID, setOrderID] = useState<ORDER>()
    const dispatch = useDispatch();
    const { fetchData }  = bindActionCreators(actionCreator, dispatch);
    const state = useSelector((state: State) => state.orders);
    const classes = useStyles();
  

useEffect(() => {
    const fetched = new Promise<any>((res) => {
        const orderss = fetchData()
        res(orderss)
    })

    fetched.then ((value => {
        let response = value.payload;
        setOrderID(response)
    }))
},[])

function render() : any {
    return state.map((item) => {
        return(
            <>
                <ListItem button component={Link}  to="/singleOrder" >
                    <ListItemText primary={item.orderID}/>
                </ListItem>
                <Divider />
            </>
        )
    })
}

    return(
        <div dir="">
            <List component="nav" className={classes.root} aria-label="mailbox folders">
                {render()}
            </List>
        </div>
    );
};
export default Orders;