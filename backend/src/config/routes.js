const express = require('express');

module.exports = function(server){
    const router = express.Router();
    server.use('/api', router);

    const productsService = require('../api/products/productService');
    productsService.register(router, '/product');
}