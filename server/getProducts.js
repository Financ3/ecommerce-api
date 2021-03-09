const products = require('../products.json');

const getProducts = (req, res) => {
  if (!req.query.price) {
    res.status(200).send(products);
  } else {
    console.log(req.query.price);
    let arrayToSend = [];
    arrayToSend = products.filter(product => product.price >= +req.query.price)
    console.log(arrayToSend);
    res.status(200).send(arrayToSend);
  }
}

module.exports = getProducts