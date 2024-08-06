const { MongoClient } = require("mongodb");
const nodemon = require("nodemon");


const url = "mongodb://0.0.0.0:27017"
const database = "MinorProject"
const client = new MongoClient(url)

async function connectdb(){
    let result  =  await client.connect()
    let db = result.db(database)
    return db.collection("osquestions")
}

module.exports = connectdb;