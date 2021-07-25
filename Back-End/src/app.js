const express = require('express');
const mongoose = require('mongoose');

const database = require('./database');
const Product = require('./models/products');
const Purchase = require('./models/purchases');
const {AdminUser,User} = require('./models/users');
const cors = require('cors');

// set up application
const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const router = express.Router();

// set up routes
// TODO: do not return Mongoose fields to the client
router.route('/products')
  .get(async (request, response) => {
    products = await Product.find().exec();
    response.status(200).send(products);
  })
  .post(async (request, response) => {
    // IMPROVEMENT: validate body
    product = await Product.create(request.body);
    response.status(201).send(product);
  })
router.route('/products/:id')
  .get(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    product = await Product.findById(id).exec();
    if (!product) {
      response.status(404).send()
    }
    response.status(200).send(product);
  })
  .put(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    // IMPROVEMENT: validate body
    // IMPROVEMENT: return 201 status code if product is created
    product = await Product.findByIdAndUpdate(id, request.body, {new: true, upsert: true}).exec();
    if (!product) {
      response.status(404).send()
    }
    await product.save();
    /*
    if (product) {
      product = request.body;
      await product.save();
      resStatusCode = 200;
    }
    else {
      product = await Product.create(request.body);
      resStatusCode = 201;
    }
    */
    response.status(200).send(product);
  })
  .delete(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    try {
      product = await Product.findByIdAndDelete(id).exec();
      if (!product) {
        response.status(404).send();
      }
    }
    catch (error) {
      response.status(500).send(error);
    }
    response.status(200).send(product);
  })

// TODO: allow client to manipulate admin users too
router.route('/users')
  .get(async (request, response) => {
    users = await User.find().exec();
    response.status(200).send(users);
  })
  .post(async (request, response) => {
    // IMPROVEMENT: validate body
    user = await User.create(request.body);
    response.status(201).send(user);
  })
router.route('/users/:id')
  .get(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    // IMPROVEMENT: handle Mongoose error and return 404 status code if product does not exist
    try {
      user = await User.findById(id).exec();
    }
    catch (error) {
      response.status(500).send(error);
    }
    if (!user) {
      response.status(404).send()
      return;
    }
    response.status(200).send(user);
  })
  .put(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    // IMPROVEMENT: validate body
    // IMPROVEMENT: return 201 status code if product is created
    // IMPROVEMENT: handle Mongoose error and return 404 status code if product does not exist
    user = await User.findByIdAndUpdate(id, request.body, {new: true, upsert: true}).exec();
    if (!user) {
      response.status(404).send()
    }
    await user.save();
    response.status(200).send(user);
  })
  .delete(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    try {
      user = await User.findByIdAndDelete(id).exec();
      if (!user) {
        response.status(404).send();
      }
    }
    catch (error) {
      response.status(500).send(error);
    }
    response.status(200).send(user);
  })

router.route('/purchases')
  .get(async (request, response) => {
    purchases = await Purchase.find().exec();
    response.status(200).send(purchases);
  })
  .post(async (request, response) => {
    // IMPROVEMENT: validate body
    purchase = await Purchase.create(request.body);
    response.status(201).send(purchase);
  })
router.route('/purchases/:id')
  .get(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    // IMPROVEMENT: handle Mongoose error and return 404 status code if product does not exist
    try {
      purchase = await Purchase.findById(id).exec();
    }
    catch (error) {
      response.status(500).send(error);
    }
    if (!purchase) {
      response.status(404).send()
      return;
    }
    response.status(200).send(purchase);
  })
  .put(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    // IMPROVEMENT: validate body
    // IMPROVEMENT: return 201 status code if product is created
    purchase = await Purchase.findByIdAndUpdate(id, request.body, {new: true, upsert: true}).exec();
    if (!purchase) {
      response.status(404).send()
    }
    await purchase.save();
    response.status(200).send(purchase);
  })
  .delete(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    try {
      purchase = await Purchase.findByIdAndDelete(id).exec();
      if (!purchase) {
        response.status(404).send();
      }
    }
    catch (error) {
      response.status(500).send(error);
    }
    response.status(200).send(purchase);
  })

app.use('/', router);

module.exports = app;
