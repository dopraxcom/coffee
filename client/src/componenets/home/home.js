import React from 'react';

import Catagories from '../../widgets/catagories/catagories';
import Banner from '../../widgets/banner/banner';
import WishList from '../../widgets/wishList/wishList';
import WishGrid from '../../widgets/wishGrid/wishGrid';
import Basket from '../basket/Basket';
import ListGrid from '../../widgets/wishList/listGrid';


function Main () {
    return (
        <div >
            <Catagories />
            <WishGrid/>
            <Banner/>
            <WishList/>
            {/* <ListGrid /> */}
            <Basket />
        </div>
    );
}

export default Main;