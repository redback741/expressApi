const express = require("express")
const articleCtrl = require("../controller/article");
const articleValidator = require("../validator/article");
const auth = require("../middleware/auth");
const router = express.Router();


router.post("/article/createArticle",auth, articleValidator.createArticle, articleCtrl.createArticle);

module.exports = router;