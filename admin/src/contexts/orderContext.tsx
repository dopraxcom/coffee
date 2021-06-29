import React from 'react'

interface Orders {
    orderId: string
}


const Orders = React.createContext<Orders | null>(null);
export default Orders;