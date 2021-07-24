const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    id: {type: Number, unique: true, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    productId: {type: Number, required: true},
    // store price at the moment of the purchase because we keep only the latest price in the product schema
    productPrice: {type: Number, required: true},
    productQuantity: {type: Number, default: 1},
    creditCard: {number: Number},
    time: {type: Date, default: Date.now}
})
const Purchase = mongoose.model('Purchase', PurchaseSchema)

module.exports = Purchase;
