const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todolistSchema = new Schema({
    title: { 
        type: String
    },
    detail: { 
        type: String
    },
},{
    collection: 'todolist'
})

module.exports = mongoose.model('db', todolistSchema)