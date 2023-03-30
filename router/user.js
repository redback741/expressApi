const express = require("express")
const userCtrl = require("../controller/user");
const userValidator = require("../validator/user");
const auth = require("../middleware/auth");

const router = express.Router();

// Authentication 用户登录
router.post("/user/login", userValidator.login, userCtrl.login);

// 注册
router.post("/user/register", userValidator.register, userCtrl.register);

// 
router.get("/user", auth, userCtrl.getCurrentUser)

module.exports = router;