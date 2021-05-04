import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Basket extends Component {

    qty() {
        let count = 0;
        this.props.qty.map((item) => {
          if (!(item.id === undefined)) {
            count++;
            console.log(count.toString());
          } else {
            // document.getElementsByClassName('shopCartSpan2')[0].innerHTML = count.toString();
            return count.toString();
          }
        });
    }
    
    render() {
        {this.qty()}
        console.log(this.qty());
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
    return { qty: state.addToCart };
}

export default connect(mapStateToProps)(Basket);
