const express = require("express");
const router = express.Router();
const profile = require("../controller/profile");

router.get('/:username', profile.getProfile);

module.exports = router;