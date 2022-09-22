var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema(
    {
        "brand": {
            type: String,
            required: true
        },
        "model": {
            type: String,
            required: true
        },
        "price": {
            type: Number,
            required: true
        },
        "availability": {
            type: Boolean,
            required: false,
            default: true
        },
        "date_created": {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

var ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;