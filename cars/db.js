const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://Muskan:Muskan%40181@cluster0.smmle.mongodb.net/sheycars' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose