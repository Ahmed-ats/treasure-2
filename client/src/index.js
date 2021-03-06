import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
import SocketForm from "./components/SocketForms/SocketForm"

import Profile from './components/Profile';
import Navbar from './components/Navbar';


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/chat/:id" component={SocketForm} />
            
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
