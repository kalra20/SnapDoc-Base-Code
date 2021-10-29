const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let User_data = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
    },
    role: {
      type: String,
    },
    password: {
      type: String,
      required: true
    },
    gstin: {
      type: String,
    },
    aadhar: {
      type: String,
    },
    gender: {
      type: String,
    },
    package: {
      type: String, //1,2,3....
    },
    clients: {
      type: Array, //
    },
    owners: {
      type: Array, //
    },
    image: {
      type: String, //Profile Picture
    },
  },
  {
    collection: "User_data",
  }
);

module.exports = mongoose.model("User_data", User_data);
