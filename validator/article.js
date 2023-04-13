const { body, param } = require("express-validator");
const validate = require("../middleware/validate");
const mongoose = require("mongoose");

exports.createArticle = validate([
  body("article.title").notEmpty().withMessage("文章名不能为空"),
  body("article.dexcription").notEmpty().withMessage("文章说明不能为空"),
  body("article.body").notEmpty().withMessage("文章内容不能为空"),
]);

exports.getArticle = validate([
  param("articleId").custom( async (value) => {
    if (!mongoose.isValidObjectId(value)) {
      return Promise.reject("文章ID类型错误");
    }
  }),
]);
