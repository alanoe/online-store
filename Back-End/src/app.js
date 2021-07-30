'use strict'

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
const salesController = require('./controllers/sales');
const usersController = require('./controllers/users');
const cartController = require('./controllers/cart');

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

// set up routes
// TODO: do not return Mongoose fields to the client
// TODO: block most of these routes if user is not authenticated
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
router.route('/users/current')
  .get(usersController.getCurrent)
  .put(usersController.putCurrent)

router.route('/login')
  .post(usersController.login)
router.route('/logout')
  .post(usersController.logout)
router.route('/resetpw')
  .post(usersController.resetPw);
router.route('/send-pw-reset-email')
  .post(usersController.sendPwResetEmail);
router.route('/signup')
  .post(usersController.signup);

router.route('/sales')
  .get(salesController.get)
  .post(salesController.post)
router.route('/sales/:id')
  .get(salesController.getById)
  .post(salesController.post)
  .put(salesController.put)
  .delete(salesController.deleteById)

router.route('/cart/buy')
  .post(cartController.buy)
router.route('/cart')
  // IMPROVEMENT: consider using a client-side session (e.g. stored in a JWT token) instead of a server-side session
  .get(cartController.get)
  .delete(cartController.delete)
router.route('/cart/products')
  .get(cartController.getProducts)
router.route('/cart/products/:id')
  .put(cartController.addOrUpdateProduct)
  .delete(cartController.removeProduct)

app.use('/', router);

module.exports = app;
