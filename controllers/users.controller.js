const User = require("../models/Cart.model");
const User = require("../models/User.model")

module.exports.userController = {

    // Вывод всех пользователей
    getUSers: async (req, res) => {
      try {
        const users = await User.find();
        res.json(users);
      } catch (e) {
        res.json(e);
      }
    },
  
    // Регистрация клиента
    addUser: async (req, res) => {
      try {
        const { name, lastName } = req.body;
        const user = await User.create({
          name,
          lastName,
        });
        await Cart.create({
            userId: user._id,
        });
        res.json("Клиент добавлен, и корзина создана");
      } catch (e) {
        res.json(e);
      }
    },
  
    // Удаление пользователя
    deleteUser: async (req, res) => {
      try {
        await User.findByIdAndRemove(req.params.id);
        res.json("Клиент удален");
      } catch (e) {
        res.json(e);
      }
    },
   
  };
  