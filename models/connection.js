const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Connection = new Schema({
users: {
type: [String]
}
},
{
collection: 'Connection'
});

module.exports = mongoose.model('Connection', Connection); 