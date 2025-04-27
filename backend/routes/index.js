const express = require("express");
const router = express.Router();

// Diğer rota dosyalarını içe aktarma
const productRoute = require("./products.js");
const categoryRoute = require("./categories.js");

// Her rotayı ilgili yol altında kullanma
router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;
