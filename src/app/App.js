import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import axios from 'axios'

class App extends Component {

  
  render() {
    return (
      <div className='container'>
        <h2>Hello : {this.props.user.name} </h2>
        
        <button onClick={ () => this.props.set_NAME("Nilphet") } className='btn btn-primary' >Button</button>
        <button onClick={ this._get }>GET </button>
      </div>
    )
  }
}
const mapStatetoProps = state => {
  return {
    user : state.user,
    emp : state.emp
  }
}


const mapDispatchtoProps = dispatch => {
  return {
    findData : () => axios.get('http://localhost:5000') ,
    set_NAME : async function(name) { 
        let test = await this.findData()
        dispatch({
          type:"SETNAME",
          payload : test
        })
     
    }

  }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
