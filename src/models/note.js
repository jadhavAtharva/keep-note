const mongooose = require('mongoose')
const validator = require('validator')

const Note = mongooose.model('Note', {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // name: {
    //     type: String,
    //     required: true
    // }
})

module.exports = Note