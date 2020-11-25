 const jwt = require('jsonwebtoken')
 const {User} = require('../db/models/index')
 const bcrypt = require('bcrypt')
 const {secretKey} = require('../config/config')

const verifyToken = (req, res,next) => {
   const token = req.get('x-access-token');
   if (token === undefined){
        return res.sendStatus(401)
   } 
    jwt.verify(token,secretKey,(err,decoded) => {
        req.userId = decoded.userId;
        if (err) {
            return res.sendStatus(401)
        }
        next()
    })
}
const isSuperAdmin = async (req, res, next) => {
    let user = await User.findOne({_id:req.userId})
    user.roles.forEach(role => {
            if (role === "SUPER_ADMIN") {
                next()
            }
        })
    return res.status(403).json({message:"User do not have permission  with this url"})
}
module.exports = {
    verifyToken,
    isSuperAdmin
}