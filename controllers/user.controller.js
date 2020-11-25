const {User} = require('../db/models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {secretKey} = require('../config/config')
const registration =  (req, res) => {
	let saltRounds = 10;
	const { username,email,password,password_confirm}  = req.body
	let role = null
	// check matching password
    if (password !== password_confirm) {
		return res.status(500).json({message: 'password is  not confirmed'})
	}
	// assigne role in SUPER_ADMIN  if there is no user in database
    User.find({}).then((users) => {
        if (!users) {
            role = ['SUPER_ADMIN']
        }else{
			users.forEach(user => {
				if (email === user.email) {
				return res.status(401).json({message: 'Email address has already been used '})
				}else if (username === user.username){
					return res.status(401).json({message: 'username  address has already been used '})
				}
			});
		}
    }).catch((err) => {
        console.log(err);
	});
	// hashing password  and  updating password value for hashed password
	bcrypt.genSalt(saltRounds,(err,salt) => {
		bcrypt.hash(password,salt,(err,hash) =>{
			User.create({username,password:hash,email,roles: [role]}).then((user) => {
				return res.status(200).json({user})
			}).catch((err) => {
				console.log(err);
				return res.status(401).json({err})
			});
		})
	})
}
const login = (req, res) => {
	const {email, password} = req.body
	User.findOne({email},(err,user)=>{
		if (err) return res.status(401).json({message: 'Email is not exists'})

		bcrypt.compare(password,user.password,(err,match)=>{
			if (match) {
			     jwt.sign({userId:user.id},secretKey,{
                    expiresIn:'2 days'
                },(err,token)=>{
                    return res.status(200).json({token,roles:user.roles})
                })
			}
		})
	})
}
const getUsers =  (req, res) => {
	console.log(req._userId);
	User.find({}).then(users =>{
		return res.status(200).json({users})
	})
}
module.exports ={login,registration,getUsers}