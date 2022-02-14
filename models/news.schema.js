const { type} = require('express/lib/response');
const mongoose = require('mongoose');
//const {schema} = mongoose

const schema = new mongoose.Schema({
    title:{
        type: String,
        required:[true, 'Hello title is required'],
        minlength: 5,
        maxlength: 20,
        trim: true
    },
    description:{
        type: String,
        required: [true, 'Hello description is required'],
        minlength: 20,
        trim: true
    },
    body: {
        type: String,
        required: [true, 'Hello body is required'],
        minlength: 20,
        trim: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    isValid: {
        type: Boolean,
        default: true
    },
    comment: {
        type: [{}],
    },
    reactions: {
        likes: {
            type: Number,
        },
        dislikes: {
            type: Number
        }
    }
}, {timestamps: true})

const News = mongoose.model('News', schema);

module.exports = News;

// if your date is from frontend/user e.g date of birth you can use string and you should use required but if it is you puting the date you created a schema, you don't need it.