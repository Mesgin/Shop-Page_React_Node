import React, { Component } from 'react'

class Hats extends Component {
  render() {
    let hatsJSX = this.props.hats.map((hat,i) => {
      return (
          <div className="col-sm-4 col-md-4 col-lg-4 hat" key={i}>
            <h3>{hat.name}</h3>
            <p>Price: {hat.price} $</p>
            <img src={hat.picture} width="100" height="100" alt={hat.name} />
            <button className="btn btn-success" onClick={() => { this.props.addToCart(hat) }}>Add to Cart</button>
          </div>
      )
    })
    return (
      <div className="row">
        {hatsJSX}
      </div>
    )
  }
}

export default Hats