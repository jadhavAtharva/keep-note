const mongooose = require('mongoose')

mongooose.connect('mongodb://127.0.0.1:27017/keep-notes', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// /Users/admin/mongodb/bin/mongod.exe --dbpath=/Users/admin/mongodb-data