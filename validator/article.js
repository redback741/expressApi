const { body } = require("express-validator");
const validate = require("../middleware/validate");

exports.createArticle = validate([
  body("article.title").notEmpty().withMessage("文章名不能为空"),
  body("article.dexcription").notEmpty().withMessage("文章说明不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);
