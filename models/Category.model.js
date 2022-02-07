const mongoose = require('mongoose')

const categorySсhema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: false,
            default: 'This is what you need'
        }
    }
    )

const Category = mongoose.model('Category', categorySсhema)

module.exports = Category