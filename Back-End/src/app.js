// 3rd party requires
const cors = require('cors');
const express = require('express');
//const basicAuth = require('express-basic-auth');
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const session = require('express-session');
const MongoStore = require('connect-mongo');

// project requires
const {cryptPassword, comparePassword} = require('./crypt');
const database = require('./database');
const Product = require('./models/products');
const Purchase = require('./models/purchases');
const {AdminUser,BaseUser,User} = require('./models/users');

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
function authorize(username, password) {
  const user = BaseUser.find({email: username});
  return comparePassword(password, user.email);
}

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
  .get(async (request, response) => {
    products = await Product.find({}, '_id name qnt price').exec();
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
    product = await Product.findById(id, '_id name qnt price description').exec();
    if (!product) {
      response.status(404).send()
    }
    response.status(200).send(product);
  })
  .put(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    update = req.body
    // IMPROVEMENT: validate body
    // IMPROVEMENT: return 201 status code if product is created
    product = await Product.findByIdAndUpdate(id, {$set: {name: update.name, description: update.description, price: update.price}}, {new: true, upsert: true}).exec();
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
    users = await User.find({}, "_id email name phone").exec();
    response.status(200).send(users);
  })
  .post(async (request, response) => {
    // IMPROVEMENT: validate body
    user = request.body;
    user.password = await cryptPassword(user.password);
    console.log(`user password is ${user.password}`);
    await User.create(user);
    response.status(201).send(user);
  })
router.route('/users/:id')
  .get(async (request, response) => {
    const id = mongoose.Types.ObjectId(request.params.id);
    // IMPROVEMENT: handle Mongoose error and return 404 status code if product does not exist
    try {
      user = await User.findById(id, "_id email name phone creditCards").exec();
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

router.route('/login')   // basicAuth({authorizer: authorize})
  .post(async (request, response) => {
    // parse login and password from headers
    const b64auth = (request.headers.authorization || '').split(' ')[1] || ''
    const strauth = Buffer.from(b64auth, 'base64').toString()
    const splitIndex = strauth.indexOf(':')
    const email = strauth.substring(0, splitIndex)
    const password = strauth.substring(splitIndex + 1)
    if (authorize(email, password)) {
      request.session.authenticated = true;
      response.status(200).send();
    }
    else {
      response.status(401).send();
    }
  });
router.route('/logout')
  .post(async (request, response) => {
    request.session.authenticated = false;
    await request.session.save();
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

router.route('/cart')
  .get(async (request, response) => {
    if (!request.session.cart) {
      request.session.cart = {}
      await request.session.save();
    }
    response.status(200).send(cart);
  })
  .delete(async (request, response) => {
    request.session.cart = {}
    await request.session.save();
    response.status(200).send()
  });
router.route('/cart/products')
  .get(async (request, response) => {
    if (!request.session.cart) {
      request.session.cart = {}
      await request.session.save();
    }
    response.status(200).send(cart);
  })
  .post(async (request, response) => {
    productId = request.body["id"];
    if (itemId in request.session.cart) {
      req.session.cart[productId].qnt += request.body["qnt"];
    }
    else {
      req.session.cart[productId].qnt = request.body["qnt"];
    }
    await request.session.save();
    response.status(201).send(request.session.cart);
  })
  .delete(async (request, response) => {
    productId = request.body["id"];
    if (!(itemId in req.session.cart)) {
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
