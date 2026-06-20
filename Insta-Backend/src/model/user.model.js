const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, "Username already exists"],
        required: [true, "Username required"]
    },
    email: {
        type: String,
        unique: [true, "email already exists"],
        required: [true, "Email required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    },
    bio: {
        type: String
    },
    profileImage:{
        type: String,
        default: "https://ik.imagekit.io/fxbumjqvn/Insta-clone-profile/150fa8800b0a0d5633abc1d1c4db3d87.jpg?updatedAt=1781841462843"
    },
    followers: {
        type: String
    }
    
})

const userModel = mongoose.model("users", userSchema)

module.exports = userModel