'use strict'

const session = require('express-session');
const mongoose = require('mongoose');

const {hashPassword, comparePassword} = require('../crypt');
const {AdminUser,BaseUser,User} = require('../models/user');
const {objHasProperties, filterObjByKeys} = require('../utils');

const authenticate = async (email, password) => {
  const user = await BaseUser.findOne({email: email}).exec();
  if (!user) {
    return null;
  }
  return await comparePassword(password, user.password) ? user : null;
}

exports.getSession = async (request, response) => {
  response.status(200).send(request.session)
}

exports.login = async (request, response) => {
  // parse login and password from the authorization header
  const b64auth = (request.headers.authorization || '').split(' ')[1] || ''
  const strauth = Buffer.from(b64auth, 'base64').toString()
  const splitIndex = strauth.indexOf(':')
  const email = strauth.substring(0, splitIndex)
  const password = strauth.substring(splitIndex + 1)
  // authenticate user
  const user = await authenticate(email, password)
  if (user !== null) {
    request.session.userId = user.id;
    response.status(200).send({"isAdmin": user.kind === "AdminUser"});
  }
  else {
    response.status(401).send();
  }
}

exports.logout = async (request, response) => {
  await request.session.destroy();
  response.status(200).send;
}

exports.deleteById = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  let user = null;
  try {
    user = await BaseUser.findByIdAndDelete(id).exec();
    if (!user) {
      response.status(404).send();
    }
  }
  catch (error) {
    response.status(500).send(error);
  }
  response.status(200).send(user);
}

exports.get = async (request, response) => {
  const users = await BaseUser.find({}, "_id email name phone").exec();
  response.status(200).send(users);
}

exports.getCurrent = async (request, response) => {
  let user = null;
  user = await BaseUser.findById(request.session.userId, "_id email name address phone creditCards").exec();
  if (!user) {
    response.status(404).send();
    return;
  }
  response.status(200).send(user);
}

exports.getById = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  let user = null;
  try {
    user = await BaseUser.findById(id, "_id email name address phone creditCards").exec();
  }
  catch (error) {
    response.status(500).send(error);
  }
  if (!user) {
    response.status(404).send()
    return;
  }
  response.status(200).send(user);
}

exports.post = async (request, response) => {
  // IMPROVEMENT: validate body
  let user = request.body;
  user.password = await hashPassword(user.password);
  console.log(`user password is ${user.password}`);
  await User.create(user);
  response.status(201).send(user);
}

exports.put = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: validate body
  let user = await User.findByIdAndUpdate(id, request.body, {new: true, upsert: true}).exec();
  if (!user) {
    response.status(404).send()
  }
  await user.save();
  response.status(200).send(user);
}

exports.putCurrent = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: validate body
  let user = await User.findByIdAndUpdate(request.session.id, request.body, {new: true, upsert: true}).exec();
  if (!user) {
    response.status(404).send()
  }
  await user.save();
  response.status(200).send(user);
}

exports.resetPw = async (request, response) => {
  const user = await BaseUser.find({email: req.query.email}).exec()
  if (!user) {
    response.status(404).send();
    return;
  }
}

exports.sendPwResetEmail = async (request, response) => {
  email = request.body["email"];
  const user = await BaseUser.find({email: email}).exec();
  if (!user) {
    response.status(404).send();
    return;
  }

  await transporter.sendMail({
    from: 'Granja dos Desesperados <suporte@granjadesesperados.com>',
    to: email,
    html: `Olá, ${user["name"], split(' ')[0]}! Recebemos um pedido de reset de senha da sua conta. Se foi você que nos enviou esse pedido, clique <a href=\'http://localhost:3001/resetpw?email=${email}\' >aqui</a> para resetar sua senha. Se não foi você, pode ignorar esse email.`
  })
}


exports.signup = async (request, response) => {
  const userRequiredFields = ["email", "password", "name", "address", "phone"]
  const userAllowedFields = userRequiredFields
  // validate body
  let user = request.body;
  let missingProps = objHasProperties(user, userRequiredFields)
  if (missingProps.length > 0) {
    response.status(400).send(`Campos requeridos faltando: ${missingProps.split(", ")}`)
  }
  // hash password so that it's secure even if an unauthorized user accesses the db
  user.password = await hashPassword(user.password);
  console.log(`user hashed password is ${user.password}`);
  user = filterObjByKeys(user, userAllowedFields)
  // create user in the db
  try {
    await User.create(user);
  }
  catch (e) {
    if (e.code === 11000) {
      response.status(500).send("Usuário com esse email já existe")
    }
    else {
      response.status(500).send("Erro ao criar usuario")
    }
  }
  response.status(201).send(user);
}
