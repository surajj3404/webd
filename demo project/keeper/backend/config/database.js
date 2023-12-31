const mongoose = require("mongoose");

const connectDatabase =  ()=>{
    mongoose.connect( process.env.DB_URI , { useNewUrlParser: true })
    .then((data)=>{
        console.log("MongoDB Connection Successful" + data.connection.host.toString());
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connectDatabase;