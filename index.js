// Imported required packages
const express = require("express"),
  path = require("path"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  mongoose = require("mongoose");

const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);
// MongoDB Databse url
const MONGODB_URI = "mongodb://127.0.0.1:27017/Snapdoc"
var mongoDatabase = MONGODB_URI;

const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',

})


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
const authRoutes = require("./routes/auth")
// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 8080;

//session middleware
app.use(session({secret: 'my secret', resave: false, saveUninitialized: false, store: store}))

// Routes Configuration
app.use("/admin", userRoutes);
app.use("/worksheet", worksheetRoute);
app.use("/auth", authRoutes);

// Staring our express server
const server = app.listen(port, () => {
  console.log("Server Lisening On Port : " + port);
});
