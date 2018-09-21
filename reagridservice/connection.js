//const MongoClient = require('mongodb').MongoClient;
const Mongoose = require('mongoose');
let db;
let connectionString = "mongodb+srv://reagrid_dbadmin:Salci8gQm@reagrid-bedug.mongodb.net/test?retryWrites=true";

module.exports = function(callback) {
    //if there is connection, dont connect again
    if(db) {
        callback(db)
        return;
    }

    Mongoose.connect(connectionString);

    Mongoose.connection.once('open', function() {
        console.log("connected!");
        db = Mongoose.connection;
        //var collection = db.collection("reagrid_collection");
        callback(db);
    }).on('error', function(error) {
        console.log('connection error: ' + JSON.stringify(error));
    });
}