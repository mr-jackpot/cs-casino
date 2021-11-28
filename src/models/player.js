const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
});

module.exports = Player = mongoose.model("Players", UserSchema);