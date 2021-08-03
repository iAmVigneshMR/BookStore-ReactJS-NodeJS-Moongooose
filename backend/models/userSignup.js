const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSignup = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    books:[{
        type:Schema.Types.ObjectId,
        ref:"books"
    }]
},
{
    timestamps: true,
});

//to compare password
userSignup.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//to encrypt the password
userSignup.pre('save', async function(next){
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password, salt);
})

module.exports = mongoose.model('signup', userSignup)