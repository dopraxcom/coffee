import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { cleanCart } from '../../actions';

class Basket extends Component {

    state = {
        counter : 0
    }

    qty() {
        let count = 0;
        this.props.qty.map((item) => {
          if (!(item.id === undefined)) {
            count++;
            this.state.counter = count;
            console.log(this.state.count);
          } else {
            // document.getElementsByClassName('shopCartSpan2')[0].innerHTML = count.toString();
            return 0;
          }
        });
    }
    
    render() {
        {this.qty()}
        this.props.cleanCart(this.props.addToCart);
        console.log('Basket count: ', this.qty());
        return (
        <Link to="/cart">
            <div className="shopCartIconDiv">
                <span className="btn btn-warning btn-sm shopCartSpan1">
                    <i className="lni lni-shopping-basket"></i>
                </span>
                <span className="shopCartSpan2">{this.qty}</span>
            </div>
        </Link>
        )
    }
}

const mapStateToProps = state => {
    return { qty: state.addToCart,
             cleanCart : state.cleanCart
            };
}

export default connect(mapStateToProps , { cleanCart })(Basket);
