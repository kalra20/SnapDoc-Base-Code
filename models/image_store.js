const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Image_data = new Schema(
  {
    Client_id: {
      type: String,
    },
    ImageUrl: {
      type: String,
    },
  },
  {
    collection: "Image_data",
  }
);

module.exports = mongoose.model("Image_data", Image_data);
