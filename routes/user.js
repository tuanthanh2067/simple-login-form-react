const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/api/login", userController.userLogin);
router.post("/api/register-user", userController.userSignUp);

module.exports = router;
