const express = require("express");
const router = express.Router();


router.get("/", function (req, res) {
    console.log("Hello World");
    res.send("Hello API TODO version 2.0.0");
})

module.exports = router;
