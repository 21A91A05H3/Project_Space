const mongoose = require('mongoose');
const Schema = mongoose.Schema
const data = new Schema({
    name :{
        type:String,
        required:true
    },
    campus :{
        type:String,
        required:true
    },
    no :{
        type:String,
        required:true
    },
    floor:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('blocks', data)