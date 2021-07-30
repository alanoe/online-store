const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    items: [{
      product: {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      qnt: {type:Number, required: true, default:1},
      // store price at the moment of the purchase because we keep only the latest price in the product schema
      price: {type: Number, required: true}
    }],
    creditCard: {number: Number},
    time: {type: Date, default: Date.now}
})
const Sale = mongoose.model('Sale', SaleSchema)

module.exports = Sale;
