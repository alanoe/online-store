'use strict'

const Product = require('../models/product');


const findCartItem = (cart, productId) => {
  for (const item of cart["items"]) {
    if (item.product == productId) {
      return item;
    }
  }
  return null;
}

exports.addOrUpdateProduct = async (request, response) => {
  // validate request body
  if (!("qnt" in request.body || ("$inc" in request.body && "qnt" in request.body["$inc"]))) {
    response.status(400).send('Atributo "qnt" ou "$inc.qnt" faltando na requisição');
  }
  if ("$inc" in request.body) {
    for (let productProp in request.body["$inc"]) {
      if (productProp != "qnt") {
        response.status(400).send(`Atributo "${productProp}" não pode ser incrementado no produto`)
      }
    }
  }

  const productId = request.params.id;

  // create cart object if needed
  if (!("cart" in request.session)) {
    request.session.cart = {"items": [], creationTime: Date.now}
  }
  let cart = request.session.cart

  // check if product exists
  const product = await Product.findById(productId);
  if (!product) {
    response.status(500).send(`Produto ${productId} não existe`);
    return;
  }
  // check if requested number of items is still available
  let item = findCartItem(cart, productId);
  let newQtd = 0;
  if ("$inc" in request.body) {
    let oldQtd = 0;
    if (item !== null) {
      oldQtd = item.qnt
    }
    newQtd = oldQtd + request.body["$inc"]["qnt"]
  }
  else {
    newQtd = request.body["qnt"]
  }
  if (product.qtd <= newQtd) {
    response.status(400).send(`Não temos mais ${item.qtd} unidades do produto ${product.name} em estoque`);
  }

  // add or update product
  if (item !== null) {
    // update product
    item["qnt"] = newQtd;
  }
  else {
    // add product to cart
    cart["items"].push({"product": productId, "qnt": newQtd});
    console.log(cart["items"]);
  }
  await request.session.save();

  response.status(200).send(request.session.cart);
}

exports.updateProduct = async (request, response) => {
  // check request body
  if (!("qnt" in request.body)) {
    response.status(400).send('Atributo "qnt" faltando na requisição');
    return;
  }

  cart = request.session.cart

  // check if cart item exists
  productId = request.params.id;
  item = findCartItem(cart, productId)
  if (!item) {
    response.status(404).send("Produto não existe mais no nosso catálogo");
    return;
  }

  // update item quantity in cart
  item.qnt = request.body["qnt"];
  await req.session.save()

  response.status(200).send();
}

exports.removeProduct = async (request, response) => {
  if (!("qnt" in request.body)) {
    response.status(400).send('Atributo "qnt" faltando na requisição');
    return;
  }
  productId = request.params.id;
  item = findCartItem(cart, productId)
  if (!item) {
    response.status(404).send(`Produto ${productId} não existe no carrinho`);
    return;
  }
  delete request.session.cart[productId];
  await request.session.save();
  response.status(200).send();
}

exports.buy = async (request, response) => {
  cart = request.session.cart;
  // TODO: this must be an atomic transaction
  // decrease number of items in stock if we still have them
  cart.forEach(async cartProduct => {
    product = await Product.findById(cartProduct.product);
    if (product.qtd <= cartProduct.qtd) {
      response.status(500).send("Requested amount of product " + cartProduct.product + " is not available anymore");
    }
    else {
      product.qtd -= cartProduct.qtd;
      await product.save();
    }
  })

  // save purchase
  await Purchase.create({userId: request.session.userId, items: cart.items});

  response.status(200).send(request.session.cart);
}

exports.delete = async (request, response) => {
  if ("cart" in request.session) {
    delete request.session.cart;
    await request.session.save();
  }
  response.status(200).send()
}

exports.get = async (request, response) => {
  if (!("cart" in request.session)) {
    //request.session.cart = await Cart.create({"items": []})
    request.session.cart = {"items": []}
    await request.session.save();
  }
  response.status(200).send(request.session.cart);
}

exports.getProducts = async (request, response) => {
  if (!("cart" in request.session)) {
    response.status(200).send({"items": []});
  }
  response.status(200).send(request.session.cart["items"]);
}
