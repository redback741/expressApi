const { Article, User } = require("../model");

exports.createArticle = async (req, res, next) => {
    // console.log(req.user._id)
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

exports.getArticle = async (req, res, next) => {
  try {
    const article = await Article.findById(req.params.articleId).populate("author")
    if (!article) {
      return res.status(404).end();
    }
    res.status(201).json({
      article
    });
  } catch (error) {
    next(error);
  }
}

exports.getListArticle = async (req, res, next) => {
  try {
    // 解析数据参数，设置默认值
    const { limit = 20, offset = 0, tag, author } = req.query;
    // 过滤对象(查询使用)
    const filter = {};
    if(tag) {
      filter.tagList = tag
    }
    if(author) {
      const user = await User.findOne({username: author})
      filter.author = user ? user._id : null;
    }

    const article = await Article.find(filter)
      .skip(+offset)  //跳过多少条
      .limit(+limit)
      .sort({
        // -1,倒序 1升序
        createdAt: -1
      }); // 取多少条

    // 获取列表数量
    const articlesCont = await Article.countDocuments()
    res.status(200).json({
      article,
      articlesCont
    });
  } catch (error) {
    next(error);
  }
}

exports.updateArticle = async (req, res, next) => {
  console.log(req)
  try {
    const article = req.article;
    const bodyArticle = req.body.article;
    article.title = bodyArticle.title || article.title;
    article.description = bodyArticle.description|| article.description;
    article.body = bodyArticle.body || article.body;
    await article.save();
    res.status(200).json({
      article
    })
  } catch (error) {
    next(error)
  }
}
