const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController");
router.post("/register", loginController.register);
router.get("/login", loginController.login);
router.post("/loginUser", loginController.loginUser);
// router.post("/register", registerController.register);
router.get("/", loginController.index);
module.exports = router;
