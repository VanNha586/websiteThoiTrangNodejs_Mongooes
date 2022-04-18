const express = require("express");
const router = express.Router();
const productController = require("../app/controllers/ProductController");
router.get("/product", productController.product);
router.get("/contact", productController.contact);
router.get("/aovest", productController.aovest);
router.get("/giay", productController.giay);
router.get("/aokhoat", productController.aokhoat);
router.get("/vay", productController.vay);
router.get("/congso", productController.congso);
router.get("/dep", productController.dep);
router.get("/vo", productController.vo);
router.get("/all", productController.all);
router.get("/", productController.index);

module.exports = router;
