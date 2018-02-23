import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Please Enter Your Username</h1>
        <div className="container-fluid text-center">
          <form onSubmit={(e) => { this.props.submitHandler(e, this.textInput.value) }} action="/shop">
            <input className="form-control" type="text" placeholder="username" ref={(input) => this.textInput = input } />
            <button className="btn btn-success" type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Home