require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const PORT = 3000;
const userRouter = require("./routes/users.js");

const app = express();

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DATABASE_URL, mongooseConfig);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log(`Connected to database.`));

app.use(bodyParser.json());
app.use(express.json());
app.use("/users", userRouter);

// app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
// const students = ["Elie", "Matt", "Joel", "Michael"];

// app.get("/", (req, res) => {
//   return res.json(students);
// });

module.exports = { app, db };
