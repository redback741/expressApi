const crypto = require("crypto");

module.exports = (str) => {
  return crypto
    .createHash("md5")
    .update("wtysd" + str)
    .digest("hex")
};