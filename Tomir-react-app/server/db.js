const { MongoClient } = require("mongodb");

const URL = "mongodb://127.0.0.1:27017";

let dbConnection;

module.exports = {
  connectToDB: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log("Connect to MongoDb");
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
};
