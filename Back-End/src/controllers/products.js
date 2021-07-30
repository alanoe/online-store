'use strict'

const mongoose = require('mongoose');

//const { findById, findByIdAndUpdate } = require('./models/products');
const Product = require('../models/product');


exports.deleteById = async (request, response) => {
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
}

exports.get = async (request, response) => {
  const products = await Product.find({}, '_id name qnt price').exec();
  response.status(200).send(products);
}

exports.getById = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  const product = await Product.findById(id, '_id name qnt price description').exec();
  if (!product) {
    response.status(404).send()
  }
  response.status(200).send(product);
}

exports.post = async (request, response) => {
  // IMPROVEMENT: validate body
  const product = await Product.create(request.body);
  response.status(201).send(product);
}

exports.put = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  let update = request.body
  console.log("products:put")
  // IMPROVEMENT: validate body
  const product = await Product.findByIdAndUpdate(id, {$set: {name: update.name, description: update.description, price: update.price, qnt: update.qnt}}, {new: false}).exec();
  if (!product) {
    response.status(404).send()
  }
  await product.save();
  response.status(200).send(product);
}
