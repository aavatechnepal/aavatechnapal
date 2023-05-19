const mongoose = require ('mongoose');
const bcrypt = require ('bcrypt');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    confPassword : {
        type : String,
        required : true,
    },
    phone : {
        type : Number,
        required : true,
        unique : true,
    },
    // role : {
    //     type: String,
    //     required: true,
    // }
})

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

const aavaUser = mongoose.model('aavaUserData', userSchema);
module.exports = aavaUser;