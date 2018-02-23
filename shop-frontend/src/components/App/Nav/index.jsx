import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item">
          <Link to="/">
            <span className="nav-link">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/shop">
            <span className="nav-link">Shop</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default Nav