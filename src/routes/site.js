const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.search);
router.post("/contact", siteController.contact);

router.get("/", siteController.index);

module.exports = router;
