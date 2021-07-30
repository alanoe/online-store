'use strict'

const Sale = require('../models/sale');


exports.deleteById = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  try {
    sale = await Sale.findByIdAndDelete(id).exec();
    if (!sale) {
      response.status(404).send();
    }
  }
  catch (error) {
    response.status(500).send(error);
  }
  response.status(200).send(sale);
}

exports.get = async (request, response) => {
  sales = await Sale.find().exec();
  response.status(200).send(sales);
}

exports.getById = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: handle Mongoose error and return 404 status code if product does not exist
  try {
    sale = await Sale.findById(id).exec();
  }
  catch (error) {
    response.status(500).send(error);
  }
  if (!sale) {
    response.status(404).send()
    return;
  }
  response.status(200).send(sale);
}

exports.getSalesAggregatedByTimePeriod = async (request, response) => {
  const userId = request.session.userId;
  const startDate = request.body.startDate;
  const endDate = request.body.endDate;
  const groupBy = request.body.groupBy;
  if (groupBy != "year" && groupBy != "month") {
    response.status(400).send("Vendas somente podem ser agrupadas por mês ou ano");
  }

  // run query
  groupBy = "$" + groupBy;
  // TODO: support aggregation by year
  let docs = await Sale.aggregate().group([{
    _id: {$month: "$time"},
    num_sales: {$sum: 1}
  }]);
  docs.sort((d1, d2) => d1._id - d2._id);
  response.status(200).send(docs);
}

exports.post = async (request, response) => {
  // IMPROVEMENT: validate body
  sale = await Sale.create(request.body);
  response.status(201).send(sale);
}

exports.put = async (request, response) => {
  const id = mongoose.Types.ObjectId(request.params.id);
  // IMPROVEMENT: validate body
  sale = await Sale.findByIdAndUpdate(id, request.body, {new: true}).exec();
  if (!sale) {
    response.status(404).send()
  }
  await sale.save();
  response.status(200).send(sale);
}


