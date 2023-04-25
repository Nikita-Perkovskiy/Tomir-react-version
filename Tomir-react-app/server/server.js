const express = require("express");
const { connectToDB, getDb } = require("./db");

const PORT = 3000;

const app = express();
let db;

connectToDB((err) => {
  if (!err) {
    app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });
    db = getDb();
  } else {
    console.log("db connection error", err);
  }
});
