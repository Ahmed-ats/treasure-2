import openSocket from 'socket.io-client';
// const socketUrl = process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001/';
const socket = openSocket();

const sockets = {
    listenForMessage: (callback) => {
        // us listening for any event for message
        socket.on('message', (data) => {
            callback(data);
        });
    },

    sendMessage: (data) => {
        // us sending an event of message with any data
        socket.emit('message', data);
    },

    join: (data) => {
        socket.emit('join', data);
    }

};
export { sockets };