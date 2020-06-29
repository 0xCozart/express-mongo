const mongoose = require("mongoose");
// const uuidv5 = require("uuid/v5");

const testerSchema = new mongoose.Schema({
  data: {
    name: {
      type: String,
      require: true,
    },
    testDates: {
      type: Date,
      require: true,
      default: Date.now,
    },
  },
});

module.exports = mongoose.model("Testers", testerSchema);
