const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClientSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: Number,
    identification: Number,
    password: String,
    typeUser: String
});

module.exports = mongoose.model('Client', ClientSchema);