const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    total: Number
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;