const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://Nikita_Perkovskiy_Admin:ZEADgOHe3JuZZqTE@cluster0.mxrdjdj.mongodb.net/?retryWrites=true&w=majority";

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
