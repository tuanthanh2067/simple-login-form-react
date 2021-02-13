const userModel = require("../models/user");

const usersController = {
  userSignUp(req, res) {
    const FORM_DATA = req.body;
    const newUser = new userModel({
      email: FORM_DATA.email,
      password: FORM_DATA.password,
    });
    newUser.save((error) => {
      if (error) {
        res.status(400).json({ message: "Error signing up" });
      } else {
        res.status(200).json({ message: "Signing up successfully" });
      }
    });
  },
  userLogin(req, res) {
    const FORM_DATA = req.body;
    userModel
      .findOne({ email: FORM_DATA.email })
      .exec()
      .then((user) => {
        if (user !== null) {
          if (user.password === FORM_DATA.password) {
            res.status(200).json({ id: user._id });
          } else {
            res
              .status(400)
              .json({ message: "Username or password is not correct" });
          }
        } else {
          res
            .status(400)
            .json({ message: "Username or password is not correct" });
        }
      });
  },
};

module.exports = usersController;
