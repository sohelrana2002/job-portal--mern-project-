const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/jobPortal-db")
.then(() =>{
    console.log("Connected with mongoose");
})
.catch((err) =>{
    console.log(`Mongoose Connection error ${err}`);
});