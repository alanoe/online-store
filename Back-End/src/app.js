// 3rd party requires
const cors = require('cors');
const express = require('express');
//const basicAuth = require('express-basic-auth');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const session = require('express-session');
const MongoStore = require('connect-mongo');

// project requires
const database = require('./database');
const Cart = require('./models/cart');
const productsController = require('./controllers/products');
const purchasesController = require('./controllers/purchases');
const usersController = require('./controllers/users');

// set up application
const app = express();

app.use(cors({}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({mongoUrl: 'mongodb://localhost/granja'}),
  ttl: 7 * 24 * 60 * 60 // 7 days time-to-live
}));


// create reusable SMTP transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: "localhost",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "granja",
    pass: "granja",
  },
});

// TODO: confirm with Bruno that he's gonna take care of redirecting to login if user is not logged in and tries to access a webpage
//       how we'll use the authenticated attrib in session? Will frontend store that?

// set up routes
// TODO: do not return Mongoose fields to the client
const router = express.Router();
router.route('/products')
  .get(productsController.get)
  .post(productsController.post)
router.route('/products/:id')
  .get(productsController.getById)
  .put(productsController.put)
  .delete(productsController.deleteById)

// TODO: allow client to manipulate admin users too
router.route('/users')
  .get(usersController.get)
  .post(usersController.post)
router.route('/users/:id')
  .get(usersController.getById)
  .put(usersController.put)
  .delete(usersController.deleteById)

router.route('/purchases')
  .get(purchasesController.get)
  .post(purchasesController.post)
router.route('/purchases/:id')
  .get(purchasesController.getById)
  .post(purchasesController.post)
  .put(purchasesController.put)
  .delete(purchasesController.deleteById)

router.route('/login')   // basicAuth({authorizer: authorize})
  .post(usersController.login)
router.route('/logout')
  .post(async (request, response) => {
    await request.session.destroy();
    response.status(200).send;
  });

router.route('/send-pw-reset-email')
  .post(async (request, response) => {
    email = request.body["email"];
    user = await BaseUser.find({email: email}).exec();
    if (!user) {
      response.status(404).send();
      return;
    }

    await transporter.sendMail({
      from: 'Granja dos Desesperados <suporte@granjadesesperados.com>',
      to: email,
      html: `Olá, ${user["name"], split(' ')[0]}! Recebemos um pedido de reset de senha da sua conta. Se foi você que nos enviou esse pedido, clique <a href=\'http://localhost:3001/resetpw?email=${email}\' >aqui</a> para resetar sua senha. Se não foi você, pode ignorar esse email.`
    })
  });
router.route('/resetpw')
  .post(async (request, response) => {
    user = await BaseUser.find({email: req.query.email}).exec()
    if (!user) {
      response.status(404).send();
      return;
    }

  });

/*
router.route('/cart')
  .get(async (request,response) =>{
    cart = await Cart.find({}, '_id name qnt price').exec();
    response.status(200).send(cart);
  })
  .post(async (request, response) => {
    // IMPROVEMENT: validate body
    cart = await Cart.create(request.body);
    response.status(201).send(cart);
  })
  .delete(async (request,response) => {
    cart = await Cart.deleteMany()
  })
  .put(async (request,response) => {
    cart = await Cart.find({}, 'productID name qnt price').exec();
    products = await Product.find({}, '_id name qnt price').exec();

    cart.forEach(async cartProduct => {
      products.forEach(async product =>{
        if(cartProduct.productID == product._id){
            if(cartProduct.qnt <= product.qnt){
              product.qnt -= cartProduct.qnt;
              await Product.findByIdAndUpdate(product._id,product).exec()
            }
        }
      })
    })
  })
*/

const findCartItem = (cart, productId) => {
  for (item of cart["items"]) {
    if (item.product == productId) {
      return item;
    }
  }
  return -1; //throw new Exception(`product ${productId} not found`);
}

router.route('/cart')
  // IMPROVEMENT: consider using a client-side session (e.g. stored in a JWT token) instead of a server-side session
  .get(async (request, response) => {
    if (!("cart" in request.session)) {
      //request.session.cart = await Cart.create({"items": []})
      request.session.cart = {"items": []}
      await request.session.save();
    }
    response.status(200).send(request.session.cart);
  })
  .delete(async (request, response) => {
    if ("cart" in request.session) {
      delete request.session.cart;
      await request.session.save();
    }
    response.status(200).send()
  });
router.route('/cart/products')
  .get(async (request, response) => {
    if (!("cart" in request.session)) {
      response.status(200).send({"items": []});
    }
    response.status(200).send(request.session.cart["items"]);
  })
  .post(async (request, response) => {
    let productId = request.body["product"];
    if (!("cart" in request.session)) {
      request.session.cart = {"items": []}
    }
    let cart = request.session.cart
    item = findCartItem(cart, productId)
    if (item != -1) {
      item.qnt += request.body["qnt"];
    }
    else {
      // TODO: validate body
      cart["items"].push(request.body);
    }

    await request.session.save();

    response.status(201).send(request.session.cart);
  })
  .delete(async (request, response) => {
    productId = request.body["product"];
    if (!(productId in req.session.cart)) {
      response.status(404).send();
      return;
    }
    delete request.session.cart[productId];
    await request.session.save();
    response.status(200).send();
  });


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
