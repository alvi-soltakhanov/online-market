const mongoose = require("mongoose");

const brandSchema = mongoose.schema({
  // Название бренда
  brandsName: {
    type: String,
  },
  // Описание бренда
  brandsDescription: {
    type: String,
    required: false,
    default: "It's a new brand in our story",
  },
});

const Brand = mongoose.model("Brand", brandSchema);

module.exports = Brand;
