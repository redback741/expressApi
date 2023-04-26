const express = require("express")
const articleCtrl = require("../controller/article");
const articleValidator = require("../validator/article");
const auth = require("../middleware/auth");
const router = express.Router();


router.post("/createArticle",auth, articleValidator.createArticle, articleCtrl.createArticle);

router.get('/getArticleList', articleCtrl.getListArticle);
router.get('/:articleId', articleValidator.getArticle, articleCtrl.getArticle);
router.put('/:articleId',auth, articleValidator.updateArticle, articleCtrl.updateArticle);
router.delete('/:articleId',auth, articleValidator.deleteAritcle, articleCtrl.deleteAritcle );

module.exports = router;