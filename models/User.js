const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  googleId: String,
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
