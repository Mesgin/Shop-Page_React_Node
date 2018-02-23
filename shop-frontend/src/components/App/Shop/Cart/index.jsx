import React, { Component } from 'react'

class Cart extends Component {
    render() {
        let cartJSX = this.props.cart.map((item,i) => {
            return <div key={i}>
                <li>Name: {item.name} / Price: {item.price}</li>
            </div>
        })
        let totalJSX = this.props.cart.reduce((acc, item) => {
            return acc + item.price
        }, 0)
        return (
            <div className="cart">
                <h2>Cart</h2>
                <h4>Total : {totalJSX} $</h4>
                {cartJSX}
            </div>
        )
    }
}

export default Cart