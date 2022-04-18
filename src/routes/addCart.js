const express = require("express");
const router = express.Router();
const cartController = require("../app/controllers/cartController");

router.get("/payCart", cartController.payCart);
router.get("/:id", cartController.addCart);
router.get("/:id/product", cartController.addCartproduct);
router.get("/:id/giay", cartController.addCartgiay);
router.get("/:id/aovest", cartController.addCartaovest);
router.get("/:id/aokhoat", cartController.addCartaokhoat);
router.get("/:id/vay", cartController.addCartvay);
router.get("/:id/congso", cartController.addCartcongso);
router.get("/:id/dep", cartController.addCartdep);
router.get("/:id/vo", cartController.addCartvo);
router.get("/:id/all", cartController.addCartall);
router.get("/:id/delete", cartController.removeCart);
router.get("/", cartController.cart);

module.exports = router;
