consts mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required
    }
})

module.exports = mongoose.model('User', userSchema)