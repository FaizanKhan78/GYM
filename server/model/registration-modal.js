const mongoose = require('mongoose');
const User = mongoose.Schema({
  name:String,
  email:String,
  password:String,
  isAdmin:{
    type:Boolean,
    default:false,
  }
})

const Users = mongoose.model('User',User)
module.exports = Users;