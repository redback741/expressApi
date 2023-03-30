const jwt = require("jsonwebtoken");
const { promisify } = require("util");

// 解析
exports.sign = promisify(jwt.sign)

// 验证
exports.verity = promisify(jwt.verify);

// 不验证直接解析
exports.decode = promisify(jwt.decode)
