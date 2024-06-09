var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors = require("cors");
const multer = require("multer");

var app = Express();
app.use(cors());

var CONNETION_STRING =
  "mongodb+srv://cloudec11:SGY0hITYgWKNBGOm@gguardian.lkgbxsu.mongodb.net/?retryWrites=true&w=majority&appName=gguardian";

var DATABASE_NAME = "gripdb";
var database;

app.listen(5038, () => {
  Mongoclient.connect(CONNETION_STRING, (error, client) => {
    database = client.db(DATABASE_NAME);
    console.log("Connected to " + DATABASE_NAME + "!");
  });
});

app.get("/api/grip/stats", (request, response) => {
  database
    .collection("grippers")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

// app.post("/api/grip/append", multer().none(), (request, response) => {
//   database.collection("Customers").count({}, function (error, numOfDocs) {
//     database.collection("Customers").insertOne({
//       id: (numOfDocs + 1).toString(),
//       description: request.body.newNotes,
//     });
//     response.json("added successfully");
//   });
// });
