/** ------------------ IMPORTING PACKAGE ------------------ **/
const mongoose = require("mongoose");


/** ------------------ MAKING CONNECTION ------------------ **/

const DB = 'mongodb+srv://DarkShadow:iamgroot@cluster0.akjk0yu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

//setting it to db
const db = mongoose.connection;

/** ------------------ CHECKING CONNECTION ------------------ **/
//if error occurs
db.on("error", console.error.bind(console, "Error connecting to DB"));
// when db connects successfully
db.once("open", function(){
    console.log("Successfully connected to DB");
});

/** ------------------ EXPORTING DB ------------------ **/
module.exports = db;
