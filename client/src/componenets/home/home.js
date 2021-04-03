import React from 'react';

import Catagories from '../../widgets/catagories/catagories';
import Banner from '../../widgets/banner/banner';
import WishList from '../../widgets/wishList/wishList';
import WishGrid from '../../widgets/wishGrid/wishGrid';


function Main () {
    return (
        <div >
            <Catagories />
            <WishGrid/>
            <Banner/>
            <WishList/>
            <div className="shopCartIconDiv">
                <span className="btn btn-warning btn-sm shopCartSpan1">
                    <i class="lni lni-shopping-basket"></i>
                </span>
                <span className="shopCartSpan2">0</span>
            </div>
        </div>
    );
}

export default Main;