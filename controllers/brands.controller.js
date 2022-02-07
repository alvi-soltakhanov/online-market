const Brand = require("../models/Brand.model");

module.exports.brandController = {
  // Получить список брендов
  getBrands: async (req, res) => {
    try {
      const brands = await Brand.find();
    } catch (e) {
      res.json(e);
    }
  },

  // Добавить новый бренд

  addNewBrand: async (req, res) => {
    try {
      const { brandsName, brandsDescription } = req.body;
      await Brand.create({
        brandsName,
        brandsDescription,
      });
      res.json("Новый бренд добавлен");
    } catch (e) {
      res.json(e);
    }
  },

  // Удалить бренд 

  deleteBrand: async (req, res) => {
    try {
      await findByIdAndRemove(req.params.id);
      res.json("Бренд удален")
    } catch (e) {
      res.json(e);
    }
  }
};
