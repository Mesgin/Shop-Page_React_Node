import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'

import Hats from './Hats'
import Shoes from './Shoes'
import Cart from './Cart'

import shoe1 from '../../../image/square1.jpg'
import shoe2 from '../../../image/square2.jpg'
import shoe3 from '../../../image/square3.jpg'
import hat1 from '../../../image/square4.jpg'
import hat2 from '../../../image/square5.jpg'
import hat3 from '../../../image/square6.jpg'


class Shop extends Component {
  constructor() {
    super()

    this.state = {
      shoes: [{
        name: 'Shoe 1',
        price: 15,
        picture: shoe1,
        type: 'shoes'
      },
      {
        name: 'Shoe 2',
        price: 25,
        picture: shoe2,
        type: 'shoes'
      },
      {
        name: 'Shoe 3',
        price: 35,
        picture: shoe3,
        type: 'shoes'
      }
      ],
      hats: [{
        name: 'Hat 1',
        price: 15,
        picture: hat1,
        type: 'hats'
      },
      {
        name: 'Hat 2',
        price: 25,
        picture: hat2,
        type: 'hats'
      },
      {
        name: 'Hat 3',
        price: 35,
        picture: hat3,
        type: 'hats'
      }
      ],
      cart: []
    }
  }

  componentWillMount() {
    let data
    axios.get('http://localhost:8080/shop')
      .then((response) => {
        data = response.data
        this.setState({
          cart: data
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  addToCart = (item) => {
    axios.post('http://localhost:8080/shop', item)
    this.setState({
      cart: this.state.cart.concat(item)
    })
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.props.username}! Enjoy Your Shopping! </h1>
        <Cart cart={this.state.cart} />
        <Link to="/shop/shoes">
          <button className="btn btn-warning shoes-link" type="button">SHOES</button>
        </Link>
        <Link to="/shop/hats">
          <button className="btn btn-warning" type="button">HATS</button>
        </Link>
        <Switch>
          <Route path="/shop/hats" render={() => {
            return <Hats hats={this.state.hats} addToCart={this.addToCart} postCart={this.postCart} />
          }} />
          <Route path="/shop/shoes" render={() => {
            return <Shoes shoes={this.state.shoes} addToCart={this.addToCart} postCart={this.postCart} />
          }} />
        </Switch>
      </div>
    )
  }
}

export default Shop