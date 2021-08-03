const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const books = new Schema({
    title:{
        required:true,
        type:String,
        required:true
    },
    author:{
        required:true,
        type:String,
        required:true,
    },
    description:{
        required:true,
        type:String,
        required:true
    },
    publishDate:{
        required:true,
        type:String,
        required:true
    },
    pages:{
        required:true,
        type:String,
        required:true
    },
    cost:{
        required:true,
        type:String,
        required:true
    },
    usersbook:{
        required:true,
        type:Schema.Types.ObjectId,
        ref:'signup'
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model('books', books)