const mongoose = require('mongoose');

const mongoURI = "mongodb://0.0.0.0:27017/tutorial";

const connectToMongo = () =>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to mongo successfully")
    })
    .catch(()=>{
        console.log('error');
    })
}

module.exports = connectToMongo;