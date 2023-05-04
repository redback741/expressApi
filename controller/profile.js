const { User } = require("../model");

exports.getProfile = async (req, res, next) => {
  // console.log(req.params)
  try {
    const { username } =  req.params
    if (!username) {
      res.status(404).end();
    }
    const user = await User.findOne({username: username})
    if (user) {
      res.status(200).json({
        data: user
      });
    } else {
      res.status(400).json({
        msg: "用户不存在"
      });
    }
  } catch (error) {
    next(error)
  }
}