var DB = require('../config/db')
var mongoose = require('mongoose')

let surveySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    appliedUsers: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users'
        }],
    },
    skills: {
        type: [String],
        required: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
})

let surveyModel = DB.model('jobs', surveySchema)

module.exports = surveyModel