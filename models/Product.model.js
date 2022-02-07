const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: String,
    categoryId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    brandId: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    price: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;