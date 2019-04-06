const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productname: {
        type: String,
        required: true
    },
    cost: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    }
});

module.exports = Product = mongoose.model('products',ProductSchema);