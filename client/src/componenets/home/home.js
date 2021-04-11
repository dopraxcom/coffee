import React from 'react';

import Catagories from '../../widgets/catagories/catagories';
import Banner from '../../widgets/banner/banner';
import WishList from '../../widgets/wishList/wishList';
import WishGrid from '../../widgets/wishGrid/wishGrid';
import Basket from '../basket/Basket';


function Main () {
    return (
        <div >
            <Catagories />
            <WishGrid/>
            <Banner/>
            <WishList/>
            <Basket />
        </div>
    );
}

export default Main;