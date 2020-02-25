const Products = require('./products');

Products.methods(['get', 'post', 'put', 'delete']);
Products.updateOptions({new: true, runValidators: true});

module.exports = Products;