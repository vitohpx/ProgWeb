const express = require("express");
const router = express.Router();

router.get("/",function(req,res){
    res.send("Home page");
})

router.get("/sobre",function(req,res){
    res.render("about",{layout:false});
})

module.exports = router;