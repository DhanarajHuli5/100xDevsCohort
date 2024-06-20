const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://dhanrajhuli8762:Sj0ZGro2pYFFkJxX@cluster0.v7ki5i1.mongodb.net/userappnew")
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