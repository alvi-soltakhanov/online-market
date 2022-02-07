const Product = require('../models/Product.model');

module.exports.productsController = {
    addProduct: async (req, res) => {
        const { productName, categoryId, brandId, price } = req.body;
        try {
            const newProduct = await Product.create({
                productName,
                categoryId,
                brandId,
                price
            });
            res.json(newProduct);
        } catch (err) {
            res.json(err);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.json('Товар удален');
        } catch (err) {
            res.json(err);
        }
    },
    editProduct: async (req, res) => {
        const { productName, categoryId, brandId, price } = req.body;
        try {
            await Product.findByIdAndUpdate(req.params.id, {
                productName,
                categoryId,
                brandId,
                price
            });
            res.json('Информация о товаре обновлена');
        } catch (err) {
            res.json(err);
        }
    },
    getAllProducts: async (req, res) => {
        try {
            const allProducts = await Product.find();
            res.json(allProducts);
        } catch (err) {
            res.json(err);
        }
    },
    getProductsByCategory: async (req, res) => {
        try {
            const productsByCategory = await Product.find({ categoryId: req.params.id });
            res.json(productsByCategory);
        } catch (err) {
            res.json(err);
        }
    },
    getProductsByBrand: async (req, res) => {
        try {
            const productsByBrand = await Product.find({ brandId: req.params.id });
            res.json(productsByBrand);
        } catch (err) {
            res.json(err);
        }
    }
}