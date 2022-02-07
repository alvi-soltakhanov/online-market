const { Router } = require("express");
const { userController } = require("../controllers/users.controller");


const router = Router();

router.get('/users', userController.getUSers); // Вывод всех пользователей
router.post('/users/:id', userController.addUser); // Добавить пользователя
router.delete('/users/:id', userController.deleteUser); // Удалить пользователя

module.exports = router;