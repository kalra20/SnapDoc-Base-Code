// Importing important packages
const express = require("express");

// Using express and routes
const app = express();
const userRoute = express.Router();

// User module which is required and imported
let userModel = require("../models/user");

// To Get List Of users
userRoute.route("/").get(function (req, res) {
  userModel.find(function (err, user) {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

// To Add New User
userRoute.route("/adduser").post(function (req, res) {
  let user = new userModel(req.body);
  user
    .save()
    .then((game) => {
      res.status(200).json({ user: "User Added Successfully", code: 200 });
    })
    .catch((err) => {
      res.status(400).send("Something Went Wrong");
    });
});

// To Get User Details By User ID
userRoute.route("/edituser/:id").get(function (req, res) {
  let id = req.params.id;
  userModel.findById(id, function (err, user) {
    res.json(user);
  });
});

// 1. API to update role of the user
userRoute.route("/updateuser_role/:id").post(function (req, res) {
  userModel.findById(req.params.id, function (err, user) {
    if (!user) return next(new Error("Unable To Find User With This Id"));
    else {
      user.role = req.body.role;

      user
        .save()
        .then((emp) => {
          res.json("User Updated Successfully");
        })
        .catch((err) => {
          res.status(400).send("Unable To Update User");
        });
    }
  });
});
// 2. API to update the package of the user

// 3. API to add new clients -- Check if role is CA
userRoute.route("/updateuser_clients/:id").post(function (req, res) {
  userModel.findById(req.params.id, function (err, user) {
    if (!user) return next(new Error("Unable To Find User With This Id"));
    // else if (req.body.role != "CA")
    //   return next(new Error("You don't have the right priviledge"));
    else {
      user.clients = req.body.clients;

      user
        .save()
        .then((emp) => {
          res.json("User Updated Successfully");
        })
        .catch((err) => {
          res.status(400).send("Unable To Update User");
        });
    }
  });
});

// To Update The User Details
userRoute.route("/updateuser/:id").post(function (req, res) {
  userModel.findById(req.params.id, function (err, user) {
    if (!user) return next(new Error("Unable To Find User With This Id"));
    else {
      user.Name = req.body.Name;
      // user.lastName = req.body.lastName;
      user.email = req.body.email;
      // user.role = req.body.role; Role update will happen when user selects the role
      user.gstin = req.body.gstin;
      user.aadhar = req.body.aadhar;
      user.gender = req.body.gender;

      user
        .save()
        .then((emp) => {
          res.json("User Updated Successfully");
        })
        .catch((err) => {
          res.status(400).send("Unable To Update User");
        });
    }
  });
});

// To Delete The User
userRoute.route("/deleteuser/:id").get(function (req, res) {
  userModel.findByIdAndRemove({ _id: req.params.id }, function (err, user) {
    if (err) res.json(err);
    else res.json("User Deleted Successfully");
  });
});

module.exports = userRoute;
