const mongoose = require("mongoose");

mongoose.connect("URI")
// CONNECTION URL/TABLE NAME

//Schema of a table 
const User = mongoose.model('Users',{
  name: String, 
  email: String, 
  password: String,
});

const user = new User({
  name: "Dhanraj",
  email: "tugrp@example.com",
  password: "password",
})
user.save();
