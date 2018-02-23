import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Shop from './Shop'

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: ''
    }
  }

  componentDidMount(){
    let username = JSON.parse(localStorage.getItem('USER_NAME'))
    this.setState({
      username
    })
  }

  submitHandler = (e,val)=>{
    localStorage.setItem('USER_NAME',JSON.stringify(val))
    this.setState({
      username : val
    })
  }

  render() {
    return (
      <div className="container-fluid text-center">
        <Nav />
        <Switch>
          <Route exact path='/' render={() => {
            return <Home submitHandler={this.submitHandler}/>
          }} />
          <Route path='/shop' render={() => {
            return <Shop username={this.state.username}/>
          }} />
        </Switch>
      </div>
    );
  }
}

export default App
