//CRUD operations

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'keep-notes'

const id = new ObjectID()

MongoClient.connect(connectionURL, {useUnifiedTopology: true},  (error, client) =>{
    if(error) {
        console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

})


// /Users/admin/mongodb/bin/mongod.exe --dbpath=/Users/admin/mongodb-data
