const restful = require('node-restful');
const mongoose = restful.mongoose;

const schema = new mongoose.Schema({
    image: {type: String, require: true},
    category: {type: String, require: true},
    name: {type: String, require: true},
    marca: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    othersImages: {type: Number, require: false, default: 0},
    createdAt: {type: Date, default: Date.now}
});

module.exports = restful.model('Products', schema);