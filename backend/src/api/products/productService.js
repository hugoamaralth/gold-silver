const Products = require('./products');

Products.methods(['put', 'get', 'post', 'delete', 'pacth']);
Products.updateOptions({new: true, runValidators: true});

module.exports = Products;