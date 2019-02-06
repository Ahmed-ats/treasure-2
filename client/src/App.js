import React, { Component } from 'react';

import './App.css';
import API from '../src/utils/API';
import  { sockets }  from '../src/utils/sockets';
import AuthService from './components/AuthService';
import withAuth from './components/withAuth';
import HomeImageList from './components/HomeImageList'
import Navbar from './components/Navbar';
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

  getId = (itemId) => {

    sockets.test(itemId);

  }



  handleSearchSubmit = () => {
    
    var filArr = [];
    if (this.state.search) {
      this.setState({
        items: filArr
      })
    } else if (!this.state.search || this.state.search === ''){
      this.componentDidMount();
    } 
    this.state.items.forEach(user => {     
      user.items.forEach(item => {
        if (user.items.filter(item => item.itemName === this.state.search)) {
          var filtItems = user.items.filter(item => item.itemName === this.state.search);
        } 
        user.items = filtItems;
        
      });
      if (user.items.length !== 0){
        filArr.push(user)  
      } 
    });

    if (filArr.length === 0) {
      alert("nothing.")
      this.componentDidMount();
    }

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
          {/* <h2>Welcome!</h2> */}
          <div>
          <input className="informationInupt"
              name="search"
              placeholder="search"
              value={this.state.search} 
              onChange={this.handleInputChange}
          />
          <button type="button" span class="badge badge-light" onClick={this.handleSearchSubmit}
          key={this.state.search}
          >Search</button>
          </div>
        </div>
        {!this.state.items &&
          <h2>
            Nothing was found!
          </h2>
        }
        <br></br>
        <br></br>
        
        <HomeImageList users={this.state.items} getId={this.getId}/>
      
      </div>
  
    );
  }
}

export default App;
