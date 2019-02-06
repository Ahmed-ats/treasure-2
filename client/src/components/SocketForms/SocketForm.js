import React, { Component } from 'react';
import './SocketForm.css';
import { sockets } from '../../utils/sockets';
import API from '../../utils/API';
import AuthService from '../AuthService';
const io = require('socket.io-client')
const socket = io.connect('http://localhost:3000')


class SocketForm extends Component {
    state = {
        message: '',
        sentMessage: '',
        messages: [],
        userId: ''
    };

    constructor(props) {
        super(props);
        sockets.listenForMessage(data => {
            this.setState({ messages: [...this.state.messages, data ] })
            console.log(this.props);
        });
        
    }

    componentDidMount() {

        sockets.test("hello test");
        // this.Auth = new AuthService();
        // let loggedInUser = this.Auth.getProfile();
        // console.log(loggedInUser);
        // this.setState({
        //     userId: loggedInUser.id
        // });
        // console.log(this.state);


    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
        // Updating the input's state
        this.setState({
            [name]: value
        });
    };

    submitForm = event => {
        event.preventDefault();
        
    };
    handlePostChat = (e) => {
        e.preventDefault()
        const { message, userId } = this.state;
        const newChat = {
            message,
            userId
        }
        sockets.sendMessage(this.state.message);
        API.postChat(newChat)

    }
    // handleGetChats = (req, res) => {
    //     API.getAllChats()
    //     .then(res.jason())
    //   }

    render() {
        return (
            <div class="container">
                <div id="messageArea" class="row">
                    <div class="col-md-4">
                        {/* <div class="well">
                            <h3>Online Users</h3>
                            <ul class="list-group" id="users"></ul>
                        </div> */}
                    </div>
                    <div class="col-md-8">
                        <div class="chat" id="chat">
                            <ul>
                                {this.state.messages.map(message => <li key={message}>{message}</li>)}
                            </ul>
                        </div>
                        
                        <form id="messageForm">
                            <div class="form-group">
                                <label>Enter Message</label>
                                <div class="form-control" id="message" placeholder="messages appear here">{this.messages}</div>
                                <br />
                                <input
                                    value={this.state.message}
                                    name="message"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    placeholder="your message"
                                    className="form-control"
                                />
                                <input type="submit" class="btn btn-primary" value="Send Message" onClick={this.handlePostChat} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default SocketForm;