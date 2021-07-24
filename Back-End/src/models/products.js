const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    quantity: {type: Number, default: 0},
    price: {type: Number, required: true},
    description: String,
    // TODO: add image
    //image: {data: Buffer, contentType: String}
});
const Product = mongoose.model('Product', ProductSchema);


module.exports = Product;
