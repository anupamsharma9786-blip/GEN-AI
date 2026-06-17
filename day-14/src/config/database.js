const mongoose = require('mongoose')
const dns = require('dns')
dns.setServers(["1.1.1.1","8.8.8.8"])


async function connectToDb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("connected to database")
}


module.exports = connectToDb