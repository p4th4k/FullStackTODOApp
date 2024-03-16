const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: String,
    status: String,
})

todoSchema.set('toJSON', {
    transform: (document, returnedObj) => {
        returnedObj.id = returnedObj._id.toString()
        delete returnedObj._id
        delete returnedObj.__v
    }
})

module.exports = todoSchema;