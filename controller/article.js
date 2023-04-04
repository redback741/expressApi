const { Article } = require("../model");

exports.createArticle = async (req, res, next) => {
    console.log(req.user._id)
  try {
    const article = new Article(req.body.article);
    article.author = req.user._id
    // 将数据映射到User并执行以下
    article.populate("author").execPopulate()

    await article.save();
    res.status(201).json({
      article
    });
  } catch (error) {
    next(error);
  }
}