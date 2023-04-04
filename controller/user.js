const { User } = require("../model");
const jwt = require("../utils/jwt");
const { jwtSecret } = require("../config/config.default")

exports.login = async (req, res, next) => {
  try {
    // 处理请求
    // 得到用户信息[mongosse数据对象 转换成 json数据对象
    let user = req.user.toJSON();
    // 生成token
    const token = await jwt.sign(
      {
        userId: user._id,
      },
      jwtSecret,
       // 设置token过期时间，单位为秒
      {
        expiresIn: 60 * 60 * 24,
      }
    );
    // 移除密码属性
    delete user.password;
    res.status(200).json({
      ...user,
      token,
    });

  } catch(err) {
    next(err)
  }
};

exports.register = async(req, res, next) => {
  try {
    let user = new User(req.body.user);
    await user.save();
    user = user.toJSON();
    delete user.password;
    res.status(201).json({
      user,
    });
  } catch(err) {
    next(err)
  }
};

exports.getCurrentUser = async(req, res, next) => {
  try {
    res.status(200).json({
      user: req.user,
      event: 0
    })
  } catch(err) {
    next(err)
  }
}

