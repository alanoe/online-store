const {hashPassword, comparePassword} = require('../crypt');
const {AdminUser,BaseUser,User} = require('../models/users');

const authorize = (username, password) => {
  const user = BaseUser.find({email: username});
  return comparePassword(password, user.email);
}

exports.login = async (request, response) => {
  // parse login and password from headers
  const b64auth = (request.headers.authorization || '').split(' ')[1] || ''
  const strauth = Buffer.from(b64auth, 'base64').toString()
  const splitIndex = strauth.indexOf(':')
  const email = strauth.substring(0, splitIndex)
  const password = strauth.substring(splitIndex + 1)
  if (authorize(email, password)) {
    //request.session.authenticated = true;
    response.status(200).send(true);
  }
  else {
    response.status(401).send();
  }
}

exports.deleteById = async (request, response) => {
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
}

exports.get = async (request, response) => {
  users = await User.find({}, "_id email name phone").exec();
  response.status(200).send(users);
}

exports.getById = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: handle Mongoose error and return 404 status code if product does not exist
  try {
    user = await User.findById(id, "_id email name address phone creditCards").exec();
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
  user = request.body;
  user.password = await hashPassword(user.password);
  console.log(`user password is ${user.password}`);
  await User.create(user);
  response.status(201).send(user);
}

exports.put = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: validate body
  // IMPROVEMENT: return 201 status code if product is created
  user = await User.findByIdAndUpdate(id, request.body, {new: true, upsert: true}).exec();
  if (!user) {
    response.status(404).send()
  }
  await user.save();
  response.status(200).send(user);
}
