require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = 3000;

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DATABASE_URL, mongooseConfig);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.on("open", () => console.log(`Connected to database.`));

app.use(express.json());

const testerRouter = require("./routes/testers.js");

app.use("/testers", testerRouter);

app.listen(PORT, console.log(`Server listening on port: ${PORT}`));
