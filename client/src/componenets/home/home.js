import React from 'react';

import Catagories from '../../widgets/catagories/catagories';
import Banner from '../../widgets/banner/banner';
import WishGrid from '../../widgets/wishGrid/wishGrid';
import Basket from '../basket/Basket';
import ListGrid from '../../widgets/wishGrid/listGrid';


function Main () {
    return (
        <>
            <Catagories />
            <WishGrid/>
            <Banner/>
            <ListGrid />
            <Basket />
        </>
    );
}

export default Main;