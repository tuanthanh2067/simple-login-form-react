const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: String,
  fname: String,
  lname: String,
});

module.exports = mongoose.model("user", UserSchema);
