
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        "firstname": {
            type: String,
            required: true
        },
        "lastname": {
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true
        },
        "password": {
            type: String,
            required: true
        },
        "date_created": {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

var UserModel = mongoose.model('users', UserSchema);

module.exports = UserModel;