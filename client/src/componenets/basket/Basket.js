import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Basket extends Component {

    counter(cart){
        let set = new Set();
        cart.map((item) => {
            if (!(item.id === undefined)) {
                set.add(item);
            };
        });
        return set.size;
    };
    
    render() {
        return (
        <Link to="/cart">
            <div className="shopCartIconDiv">
                <span className="btn btn-warning btn-sm shopCartSpan1">
                    <i className="lni lni-shopping-basket"></i>
                </span>
                <span className="shopCartSpan2">{this.counter(this.props.cart)}</span>
            </div>
        </Link>
        )
    }
}

const mapStateToProps = state => {
    return { cart: state.addToCart };
}

export default connect(mapStateToProps)(Basket);
