const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://dhanrajhuli8762:Sj0ZGro2pYFFkJxX@cluster0.v7ki5i1.mongodb.net/userappnew")

const User = mongoose.model("User", {  // schema
  name: String,
  username: String,
  pasword: String,
});

app.post("/signup", async function (req, res) {
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;

    //check if the user already exists
    const user = await User.findOne({ username: username }); // findOne => check if the user already exists in the database
    if (user) {
      return res.status(403).send("User already exists");
    }

    //if the user not exists
    const newUser = new User({
      name: name,
      username: username,
      password: password,
    });
    await newUser.save();
    return res.status(201).send("User created");
});

app.listen(3000);