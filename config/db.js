var mongoose = require('mongoose')

let DB = mongoose.createConnection(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {useNewUrlParser: true, useFindAndModify: true, useCreateIndex: true, useUnifiedTopology: true})

/*
declare the following variables in a .env file at root level
DB_USER=
DB_PASSWORD=
DB_CLUSTER=
DB_NAME=

or

copy paster below text

DB_USER=test
DB_PASSWORD=test1234
DB_CLUSTER=cluster0-94hyf.mongodb.net
DB_NAME=boat



*/

module.exports = DB