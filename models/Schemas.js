const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true,
        default: "Preethi"
    },
    password: {
        type: String,
        require: true,
        default: "Preethi@389239",
    }
})

const PostSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    address:{
        type: String,
        require: true ,
        default: 'Hyderabad'
    },
    image_file: {
        type: String ,
        require: true 
    },
    description: {
        type: String ,
        require: true 
    }
})




module.exports = {User: mongoose.model("InstaUser", UserSchema), Post:mongoose.model("InstaPost", PostSchema) }