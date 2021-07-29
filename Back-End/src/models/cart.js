const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    // We could use an Object for items and have product ID as a key instead of using a list, but
    // we'd need to define items mongoose schema type as mix and would lose mongoose's schema validation.
    // As the number of items in a cart will usually be small and searching a product by ID adds little overhead,
    // we preferred this solution
    items: [{
      product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      qnt: {type:Number, required: true, default:1},
      price: {type: Number, required: true}
    }],
    creationTime: {type: Date, default: Date.now}
});
const Cart = mongoose.model('Cart', CartSchema);


module.exports = Cart;
