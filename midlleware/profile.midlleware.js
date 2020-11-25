const {Profile}  = require('../db/models/index')

const hasNoProfile = async (req, res, next) =>{
    let profile = await Profile.findOne({userId: req.userId})
    if (profile) {
        return res.status(400).json({message: "User has already profile",profile})
    }
    next()
}
module.exports = {hasNoProfile}