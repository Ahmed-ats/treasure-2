import axios from 'axios';
export default {
  // Gets a single user by id
  getUser: (id) => {
    return axios.get(`/api/user/${id}`);
  },
  // Gets items by ID
  getItem: (id) => {
    return axios.get(`/api/getitem/${id}`);
  },

  getAllItems: () => {
    return axios.get("/api/allitems");
  },

  getAllUsers: () => {
    return axios.get('/api/allusers');
  },

  getSearchItem: (itemName) => {
    return axios.get(`/api/search/${itemName}`)
  },
  // Sign up a user to our service
  signUpUser: (username, email, password, firstname, lastname, zipcode, picture) => {
    return axios.post('api/signup', { username: username, email: email, password: password, firstname: firstname, lastname: lastname, zipcode: zipcode, imageurl:picture});
  },
  // Adds new item and pushes item.id to array in Users  
  postItem: (body) => {
    return axios.post("/api/additem", { itemName: body.itemName, itemDescription: body.itemDescription, userId:body.userId, zipCode: body.zipCode, itemPicture: body.itemPicture })
  },
  // Adds chat to chat DB
  postChat: (body) => {
    console.log(body)
    return axios.post("/api/addchat", { message: body.message, userId: body.userId })
  },
  // Gets chats from DB
  getAllChats: (id) => {
    return axios.get(`/api/getChats/${id}`);
  },
  // Delete an item
  deleteItem: (id) => {
    return axios.get(`/api/deleteitem/${id}`)
  },
  // add profile image 
  userimage:  body => {
    const id = body.userId
    console.log(body)
    return axios.put(`/api/userimage/${id} `,{imageurl: body.imgurl})

  }
};
