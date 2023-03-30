const { verify } = require("../utils/jwt");
const { jwtSecret } = require("../config/config.default");
const { User } = require("../model");

module.exports = async (req, res, next) => {
  let token = req.headers.authorization;
  // 验证token
  token = token ? token.split("Token ")[1]: null;
  console.log(token)
  if(!token) {
    return res.status(401).end();
  }
  try {
    const decodedToken = await verify(token, jwtSecret);
    
    // console.log('decodedToken====', decodedToken)
    req.user = await User.findById(decodedToken.userId);
    next();
  } catch (err) {
    console.log('tokencatchs')
    return res.status(401).end();
  }
}
 