import React, { Component } from 'react'

class Shoes extends Component {
  render() {
    let shoesJSX = this.props.shoes.map((shoe,i) => {
      return (
        <div className="col-sm-4 col-md-4 col-lg-4 hat" key={i}>
          <h3>{shoe.name}</h3>
          <p>Price: {shoe.price} $</p>
          <img src={shoe.picture} width="100" height="100" alt={shoe.name} />
          <button className="btn btn-success" onClick={() => { this.props.addToCart(shoe) }}>Add to Cart</button>
        </div>
      )
    })
    return (
      <div className="row">
        {shoesJSX}
      </div>
    )
  }
}

export default Shoes