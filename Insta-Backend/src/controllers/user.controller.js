const followModel = require('../model/follow.model')
const userModel = require('../model/user.model')

async function followUserController(req,res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followeeUsername == followerUsername){
        return res.status(409).json({
            message: "you can't follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({username:followeeUsername})

    if(!isFolloweeExists){
        return res.status(404).json({
            message: "user trying to follow doesn't exists"
        })
    }

    const alreadyfollow = await followModel.findOne({
        followee:followeeUsername,
        follower:followerUsername
    })

    if(alreadyfollow){
        return res.status(409).json({
            message: "already following"
        })
    }

    const followRecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })

    return res.status(201).json({
        message: `You are now follwing ${followeeUsername}`,
        follow: followRecord
    })
}

async function unfollowUserController(req,res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followeeUsername == followerUsername){
        return res.status(409).json({
            message: "you can't follow yourself"
        })
    }

    const isFolloweeExists = await userModel.findOne({username:followeeUsername})

    if(!isFolloweeExists){
        return res.status(404).json({
            message: "user trying to follow doesn't exists"
        })
    }   

    const isUserFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(!isUserFollowing) {
        return res.status(404).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    return res.status(200).json({
        message: `You unfollowed ${followeeUsername}`
    })
}


module.exports = {
    followUserController,
    unfollowUserController
}