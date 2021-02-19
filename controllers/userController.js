const userModel = require("../models/user");

const usersController = {
  userSignUp(req, res) {
    // data is validated already
    const { email, password, fname, lname } = req.body;
    const newUser = new userModel({
      email: email,
      password: password,
      fname: fname,
      lname: lname,
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

  getUserById(req, res) {
    const id = req.params.id;
    userModel
      .findOne({ _id: id })
      .exec()
      .then((user) => {
        res.status(200).json({
          id: user._id,
          email: user.email,
          fname: user.fname || "",
          lname: user.lname || "",
        });
      })
      .catch((err) => {
        res.status(400).json({
          message: `Can not find user with id ${id}`,
        });
      });
  },
};

module.exports = usersController;
