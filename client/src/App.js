import React, { Component } from 'react';

import './App.css';
import API from '../src/utils/API';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import HomeImageList from './components/HomeImageList'
const Auth = new AuthService();

class App extends Component {

  state = {
    items: [],
    search: ''
  }

  componentDidMount = () => {
    API.getAllUsers()
    .then(res => {
      console.log(res.data)
      this.setState({
        items: res.data
      })
      console.log(this.state)
    });
  }

  handleSearchSubmit = () => {

    this.setState({
      items: []
    })
    
    this.state.items.forEach(user => {
      
      user.items.forEach(item => {
        if(this.state.search === item.itemName){
          console.log(user)
           console.log(item)
          
        }
      })

  
      
    });
  
  
  }

  
  handleInputChange = e => {
    const {name, value} = e.target;
    //the way the console log is located it looks like it is 1 letter behing but really it is not
    console.log(this.state)
    this.setState({
        [name]: value
    });
  }

  render() {
    // console.log(process.env.REACT_APP_SECRET_CODE);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome!</h2>
          <div>
          <input className="informationInupt"
              name="search"
              placeholder="search"
              value={this.state.search} 
              onChange={this.handleInputChange}
          />
          <button onClick={this.handleSearchSubmit}
          key={this.state.search}
          >Search</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <HomeImageList users={this.state.items}/>
      </div>
    );
  }
}

export default App;
