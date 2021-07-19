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
    Modal,
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
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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

function Orders () {
    const [orderID, setOrderID] = useState<ORDER>()
    const dispatch = useDispatch();
    const { fetchData }  = bindActionCreators(actionCreator, dispatch);
    const state = useSelector((state: State) => state.orders);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
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

const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

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
                <ListItem button >
                    <ListItemText primary={item.orderID} onClick={handleOpen}/>
                </ListItem>
                <Divider />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
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