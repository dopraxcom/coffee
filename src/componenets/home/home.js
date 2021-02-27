import React from 'react';

import Catagories from '../../widgets/catagories/catagories';
import Banner from '../../widgets/banner/banner';
import WishList from '../../widgets/wishList/wishList';
import WishGrid from '../../widgets/wishGrid/wishGrid';


function Main () {
    return (
        <div>
            <Catagories />
            <WishGrid/>
            <Banner/>
            <WishList/>
        </div>
    );
}

export default Main;