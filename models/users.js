const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  admin: { type: Boolean, default: false },
  location: { type: String, default: "Thread, Origin", trim: true },
  meta: {
    age: { type: Number, min: 0, max: 120 },
    website: { type: String, default: "Tgthr.wrld" },
    created_at: { type: Date, require: true, default: Date.now },
    updated_at: Date,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
