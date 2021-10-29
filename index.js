// Imported required packages
const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose");

// MongoDB Databse url
var mongoDatabase = "mongodb://127.0.0.1:27017/Snapdoc";
// Use multer to upload images
const multer = require("multer");
//File Storage
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images"); // User_ID+foldername
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});
// File filter
const filefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    console.log("Incorrect image type");
    cb(null, false);
  }
};

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  (err) => {
    console.log("There is problem while connecting database " + err);
  }
);

// All the express routes
const userRoutes = require("./controllers/user");
const worksheetRoute = require("./controllers/worksheet");

app.use(
  multer({ storage: fileStorage, filefilter: filefilter }).single("image")
);
// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 8080;

// Routes Configuration
app.use("/admin", userRoutes);
app.use("/worksheet", worksheetRoute);

// Staring our express server
const server = app.listen(port, () => {
  console.log("Server Lisening On Port : " + port);
});
