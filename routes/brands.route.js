const { Router } = require("express");
const { brandController } = require("../controllers/brands.controller");


const router = Router();

router.get('/allBrands', brandController.getBrands); // Вывод всех брендов
router.post('/', brandController.addNewBrand); // Добавить новый бренд
router.delete('/:id', brandController.deleteBrand); // Удалить бренд