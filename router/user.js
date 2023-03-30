const express = require("express")
const userCtrl = require("../controller/user");
const userValidator = require("../validator/user")

const router = express.Router();

// Authentication 用户登录
router.post("/user/login", userValidator.login, userCtrl.login);

// 注册
router.post("/user/register", userValidator.register, userCtrl.register);

module.exports = router;