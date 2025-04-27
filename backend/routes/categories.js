const express = require("express");
const router = express.Router();

// Tüm kategorileri getirme (Read - all)
router.get("/", async (req, res) => {
  res.send("kategoriler getirildi");
});

module.exports = router;
