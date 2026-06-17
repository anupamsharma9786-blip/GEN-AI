const userModel = require('../model/user.model');
const crypto = require('crypto')
const jwt = require('jsonwebtoken')



async function registerController (req,res){
    const {username, email, password, bio, profileImage} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message: "user already exists ," + (isUserAlreadyExists.email === email ? "email alreay exists" : "username already exists")
        })
    }

    const hash = crypto.createHash('sha256').update(password).digest('hex')

    const user = await userModel.create({
        username,
        email,
        password: hash,
        bio,
        profileImage
    })

    const token = jwt.sign(
    {
        id:user._id
    },
    process.env.JWT_SECRET,
    {expiresIn: '1d'})

    res.cookie("token", token)

    res.status(201).json({
        message: " Account created successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}

async function loginController (req,res){
    const {username, email, password} = req.body

    const user = await userModel.findOne({
        $or: [
            {email},
            {username}
        ]
    })

    if(!user){
        return res.status(401).json({
            message: "user doesn't exists"
        })
    }

    const hash = crypto.createHash("sha256").update(password).digest('hex')

    const isPasswordValid = hash == user.password

    if(!isPasswordValid){
        return res.status(401).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign(
        {
            id:user._id
        },
        process.env.JWT_SECRET,
        {expiresIn: '1d'}   
    )
    
    res.cookie("token", token)

    return res.status(200).json({
        message: "Logged in successfully",
        user: {
            username: user.username,
            email: user.email,
            bio: user.bio,
            profileImage: user.profileImage

        }
    })

}

module.exports = {registerController,loginController}