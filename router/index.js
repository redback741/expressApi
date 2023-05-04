const express = require("express")

const router = express.Router();

router.use(require("./user"))
router.use("/articles", require("./article"))
router.use("/profile", require("./profile"))

module.exports = router;