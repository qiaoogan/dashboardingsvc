const express = require("express");
const router = express.Router();

router.get("/health", function(req, res, next) {
    res.send({ status: "alive", version: process.env.DASHBACKEND_VERSION });
});

module.exports = router;
