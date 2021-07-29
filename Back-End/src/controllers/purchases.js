const Purchase = require('../models/purchases');


exports.deleteById = async (request, response) => {
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
}

exports.get = async (request, response) => {
  purchases = await Purchase.find().exec();
  response.status(200).send(purchases);
}

exports.getById = async (request, response) => {
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
}

exports.post = async (request, response) => {
  // IMPROVEMENT: validate body
  purchase = await Purchase.create(request.body);
  response.status(201).send(purchase);
}

exports.put = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: validate body
  purchase = await Purchase.findByIdAndUpdate(id, request.body, {new: true}).exec();
  if (!purchase) {
    response.status(404).send()
  }
  await purchase.save();
  response.status(200).send(purchase);
}
