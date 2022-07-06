const express = require('express');
const router = express.Router();
const userController=require("../controller/userController")
//const bookController=require("../controller/bookController")




router.post("/register",userController.createUser)
router.post("/login",userController.loginUser)
module.exports = router;