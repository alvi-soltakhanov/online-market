const Category = require('../models/Category.model')
 
module.exports.categoriesController = {
    getCategories: async (req, res) => {
        try {
            const getCategory = await Category.find()
            res.json(getCategory)
        } catch(e) {
            res.json(e)
        }
    },
    createCategories: async (req, res) => {
        try {
            await Category.create({
                name: name,
                description: description,
            })
            res.json('Категория создана')
        } catch (e) {
            res.json(e)
        }
    },
    deleteCategories: async (req, res) => {
        try {
             await Category.findByIdAndRemove(req.params.id)
            res.json('Категория удалена')
        } catch (e) {
            res.json(e)
        }
    },
    editCategory: async (req, res) => {
        try {
            await Category.findByIdAndUpdate(req.params.id,
                {
                   name: name,
                   description: description, 
                })
            res.json('Категория изменена')
        } catch (e) {
            res.json(e)
        }
    }
}