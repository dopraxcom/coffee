import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { $CombinedState } from 'redux';

class Basket extends Component {

    qty() {
        return (this.props.qty.length-1);
    }
    
    render() {
        console.log(this.props.qty.length)
        return (
        <Link to="/cart">
            <div className="shopCartIconDiv">
                <span className="btn btn-warning btn-sm shopCartSpan1">
                    <i class="lni lni-shopping-basket"></i>
                </span>
                <span className="shopCartSpan2">{this.qty()}</span>
            </div>
        </Link>
        )
    }
}

const mapStateToProps = state => {
    return { qty: state.addToCart };
}

export default connect(mapStateToProps)(Basket);
