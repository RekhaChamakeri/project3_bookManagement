const express = require('express');
const router = express.Router();
const { createUser, loginUser } = require("../controller/userController")
const { createBook, updateBook, getBook, getBooks, deleteBook } = require("../controller/bookController")
const { authenticate } = require("../middleware/auth")



router.post("/register", createUser)
router.post("/login", loginUser)
router.post("/books", createBook)
router.put("/books/:bookId", updateBook)
router.get("/books/:bookId", getBook)
router.get("/books/:bookId", getBooks)
router.delete("/books/:bookId", deleteBook)



module.exports = router;