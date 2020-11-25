const {Profile} = require('../db/models/index')

const createProfile = async  (req, res) => {
    const {userId} = req
    req.body.userId = userId
    req.body.naissance.birthday =  Date.now()
    console.log(req.body);
    try {
       const profile =   await Profile.create(req.body)
        return res.status(200).json(profile)
    }catch (err) {
        throw err
    }
}
module.exports = {createProfile}