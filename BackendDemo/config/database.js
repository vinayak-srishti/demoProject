const mongoose=require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.MONGO_URI);
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successfull");
})
module.export=db