const { Router } = require('express')
const { categoriesController } = require('../controller/categories.controller')

const router = Router()

router.get('/category', categoriesController.getCategories)
router.post('/category', categoriesController.createCategories)
router.delete('/category/:id', categoriesController.deleteCategories)
router.patch('/category/:id', categoriesController.editCategory)

module.exports = router