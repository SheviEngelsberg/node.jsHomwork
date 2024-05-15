const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { type: String, required: true, maxLength: 100 },
  password:{ type: String, required: true, minLength: 5},
  email: { type: String},
});


module.exports = mongoose.model("User", userSchema);
