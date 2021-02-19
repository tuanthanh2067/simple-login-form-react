const express = require("express");
const app = express();
const router = express.Router();

const userController = require("../controllers/userController");
const { celebrate, Joi, Segments, errors } = require("celebrate");

router.post("/api/login", userController.userLogin);
router.post(
  "/api/register-user",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(7).max(30).required(),
      fname: Joi.string().required(),
      lname: Joi.string().required(),
    }),
  }),
  userController.userSignUp
);

router.get("/api/user/:id", userController.getUserById);

app.use(errors());

module.exports = router;
